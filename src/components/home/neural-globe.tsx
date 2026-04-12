"use client";

import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  z: number;
  pulse: number;
}

// Fibonacci sphere distribution — evenly distributed points
function createSpherePoints(count: number): Point[] {
  const pts: Point[] = [];
  const golden = Math.PI * (1 + Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
    const theta = golden * i;
    pts.push({
      x: Math.sin(phi) * Math.cos(theta),
      y: Math.sin(phi) * Math.sin(theta),
      z: Math.cos(phi),
      pulse: Math.random() * Math.PI * 2,
    });
  }
  return pts;
}

export function NeuralGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const NODE_COUNT = 110;
    const points = createSpherePoints(NODE_COUNT);

    let rotY = 0;
    let tiltX = 0;
    let tiltY = 0;
    let rafId = 0;

    function resize() {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
    }
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function rotY3d(x: number, z: number, a: number) {
      const c = Math.cos(a), s = Math.sin(a);
      return { x: x * c - z * s, z: x * s + z * c };
    }
    function rotX3d(y: number, z: number, a: number) {
      const c = Math.cos(a), s = Math.sin(a);
      return { y: y * c - z * s, z: y * s + z * c };
    }

    function draw(ts: number) {
      if (!canvas || !ctx) return;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Auto-rotate + smooth mouse tilt
      rotY += 0.0025;
      const targetTiltX = (mouseRef.current.y - 0.5) * 0.45;
      const targetTiltY = (mouseRef.current.x - 0.5) * 0.35;
      tiltX += (targetTiltX - tiltX) * 0.04;
      tiltY += (targetTiltY - tiltY) * 0.04;

      const R = Math.min(W, H) * 0.37;
      const cx = W / 2;
      const cy = H / 2;

      // Project all nodes
      type Proj = { sx: number; sy: number; depth: number; prox: number };
      const proj: Proj[] = points.map((p) => {
        let { x, y, z } = p;
        const ry = rotY3d(x, z, rotY + tiltY);
        x = ry.x; z = ry.z;
        const rx = rotX3d(y, z, tiltX);
        y = rx.y; z = rx.z;

        // Perspective
        const fov = 2.2;
        const scale = fov / (fov + z);
        const sx = cx + x * R * scale;
        const sy = cy + y * R * scale;
        const depth = (z + 1) / 2;

        // Mouse proximity (normalized coords)
        const ndx = sx / W - mouseRef.current.x;
        const ndy = sy / H - mouseRef.current.y;
        const mdist = Math.sqrt(ndx * ndx + ndy * ndy);
        const prox = Math.max(0, 1 - mdist / 0.18);

        return { sx, sy, depth, prox };
      });

      // Draw edges (back to front via depth sort on average)
      const edgeThreshold = R * 0.52;
      for (let i = 0; i < proj.length; i++) {
        for (let j = i + 1; j < proj.length; j++) {
          const a = proj[i], b = proj[j];
          const dx = a.sx - b.sx, dy = a.sy - b.sy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < edgeThreshold) {
            const avgDepth = (a.depth + b.depth) / 2;
            const fade = 1 - dist / edgeThreshold;
            const prox = Math.max(a.prox, b.prox);
            const alpha = fade * 0.38 * avgDepth + prox * 0.4;

            ctx.strokeStyle = `rgba(139,92,246,${Math.min(alpha, 0.85)})`;
            ctx.lineWidth = 0.4 + prox * 1.8;
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const p of proj) {
        const baseR = 1.5 + p.depth * 2.5;
        const r = baseR + p.prox * 5;
        const alpha = 0.25 + p.depth * 0.75;

        // Outer glow
        const glowR = r * 4 + p.prox * 8;
        const g = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, glowR);
        g.addColorStop(0, `rgba(180,140,255,${alpha * 0.6})`);
        g.addColorStop(0.4, `rgba(139,92,246,${alpha * 0.2 + p.prox * 0.25})`);
        g.addColorStop(1, "rgba(139,92,246,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, glowR, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = `rgba(230,215,255,${alpha + p.prox * 0.3})`;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, Math.max(0.8, r * 0.35), 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);

    const onMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    window.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
