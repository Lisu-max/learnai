"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Play, Pause, Square, Volume2 } from "lucide-react";
import type { ChapterSection } from "@/content/types";

function extractText(sections: ChapterSection[]): string[] {
  return sections.flatMap((s) => {
    switch (s.type) {
      case "paragraph":
      case "heading":
      case "subheading":
      case "key-point":
      case "callout":
        return s.content ? [s.content] : [];
      case "tip":
        return s.content ? [`Conseil : ${s.content}`] : [];
      case "summary":
        return s.items?.length ? [`Points clés. ${s.items.join(". ")}`] : [];
      case "case-study":
        return s.content ? [`${s.label ? s.label + " : " : ""}${s.content}`] : [];
      case "prompt-example":
        return s.prompt ? [`Exemple de prompt : ${s.prompt}`] : [];
      case "diagram":
        return s.nodes?.length
          ? [`${s.label ? s.label + ". " : ""}${s.nodes.map((n) => n.label + (n.sub ? ", " + n.sub : "")).join(". ")}.`]
          : [];
      default:
        return [];
    }
  });
}

export function TextToSpeech({ sections }: { sections: ChapterSection[] }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [supported, setSupported] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const chunksRef = useRef<string[]>([]);
  const indexRef = useRef(0);

  useEffect(() => {
    setSupported(typeof window !== "undefined" && "speechSynthesis" in window);
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  const speakNext = useCallback(() => {
    if (indexRef.current >= chunksRef.current.length) {
      setIsPlaying(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(chunksRef.current[indexRef.current]);
    utterance.lang = "fr-FR";
    utterance.rate = 0.95;

    // Prefer a French voice if available
    const voices = window.speechSynthesis.getVoices();
    const frVoice = voices.find((v) => v.lang.startsWith("fr"));
    if (frVoice) utterance.voice = frVoice;

    utterance.onend = () => {
      indexRef.current += 1;
      speakNext();
    };
    utterance.onerror = () => {
      setIsPlaying(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, []);

  function handlePlay() {
    if (!supported) return;
    chunksRef.current = extractText(sections);
    indexRef.current = 0;
    window.speechSynthesis.cancel();
    setIsPlaying(true);
    // Small delay to let voices load
    setTimeout(speakNext, 100);
  }

  function handlePause() {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
    }
  }

  function handleResume() {
    window.speechSynthesis.resume();
    setIsPlaying(true);
  }

  function handleStop() {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    indexRef.current = 0;
  }

  if (!supported) return null;

  return (
    <div className="mb-8 flex items-center gap-3 rounded-xl border border-border/40 bg-card/30 px-4 py-3 backdrop-blur-sm">
      <Volume2 className="h-4 w-4 shrink-0 text-purple-400" />
      <span className="text-sm text-muted-foreground">Écouter ce chapitre</span>
      <div className="ml-auto flex items-center gap-2">
        {!isPlaying ? (
          <button
            onClick={window.speechSynthesis?.paused ? handleResume : handlePlay}
            className="flex items-center gap-1.5 rounded-lg bg-purple-500/10 px-3 py-1.5 text-sm font-medium text-purple-300 transition-colors hover:bg-purple-500/20"
          >
            <Play className="h-3.5 w-3.5" />
            {window.speechSynthesis?.paused ? "Reprendre" : "Lire"}
          </button>
        ) : (
          <button
            onClick={handlePause}
            className="flex items-center gap-1.5 rounded-lg bg-purple-500/10 px-3 py-1.5 text-sm font-medium text-purple-300 transition-colors hover:bg-purple-500/20"
          >
            <Pause className="h-3.5 w-3.5" />
            Pause
          </button>
        )}
        <button
          onClick={handleStop}
          className="flex items-center gap-1.5 rounded-lg bg-border/40 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-border/60"
        >
          <Square className="h-3.5 w-3.5" />
          Arrêter
        </button>
      </div>
    </div>
  );
}
