"use client";

import type { DiagramNode } from "@/content/types";
import { ArrowRight, RefreshCw } from "lucide-react";

const colorMap: Record<string, string> = {
  purple: "border-purple-500/40 bg-purple-500/10 text-purple-300",
  blue: "border-blue-500/40 bg-blue-500/10 text-blue-300",
  emerald: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
  amber: "border-amber-500/40 bg-amber-500/10 text-amber-300",
  pink: "border-pink-500/40 bg-pink-500/10 text-pink-300",
};

const subColorMap: Record<string, string> = {
  purple: "text-purple-400/70",
  blue: "text-blue-400/70",
  emerald: "text-emerald-400/70",
  amber: "text-amber-400/70",
  pink: "text-pink-400/70",
};

const defaultColors = ["purple", "blue", "emerald", "amber", "pink"] as const;

interface DiagramBlockProps {
  label?: string;
  nodes: DiagramNode[];
  flow?: "horizontal" | "vertical" | "cycle";
}

export function DiagramBlock({ label, nodes, flow = "horizontal" }: DiagramBlockProps) {
  const isCycle = flow === "cycle";
  const isVertical = flow === "vertical";

  return (
    <div className="my-8 rounded-xl border border-border/50 bg-card/30 p-5 backdrop-blur-sm">
      {label && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
      )}

      <div
        className={`flex gap-3 ${
          isVertical ? "flex-col" : "flex-wrap items-center"
        }`}
      >
        {nodes.map((node, i) => {
          const color = node.color || defaultColors[i % defaultColors.length];
          const cls = colorMap[color] || colorMap.purple;
          const subCls = subColorMap[color] || subColorMap.purple;
          const isLast = i === nodes.length - 1;
          const Connector = isCycle && isLast ? RefreshCw : ArrowRight;

          return (
            <div
              key={i}
              className={`flex ${isVertical ? "w-full items-start" : "items-center"} gap-3`}
            >
              {/* Node */}
              <div
                className={`rounded-xl border px-4 py-3 text-center ${cls} ${
                  isVertical ? "flex-1" : "min-w-[100px]"
                } animate-fade-in`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <p className="text-sm font-semibold leading-tight">{node.label}</p>
                {node.sub && (
                  <p className={`mt-1 text-xs leading-tight ${subCls}`}>{node.sub}</p>
                )}
              </div>

              {/* Arrow between nodes */}
              {!isLast && (
                <Connector
                  className={`h-4 w-4 shrink-0 text-muted-foreground/50 ${
                    isVertical ? "ml-12 rotate-90 self-center" : ""
                  } ${isCycle && isLast ? "text-purple-400/60" : ""}`}
                />
              )}
              {isCycle && isLast && (
                <RefreshCw className="h-4 w-4 shrink-0 text-purple-400/60" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
