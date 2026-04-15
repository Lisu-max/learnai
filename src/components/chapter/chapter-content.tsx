"use client";

import type { ChapterSection } from "@/content/types";
import { Paragraph } from "./section-renderers/paragraph";
import { Heading } from "./section-renderers/heading";
import { TipBox } from "./section-renderers/tip-box";
import { SummaryBox } from "./section-renderers/summary-box";
import { VideoEmbed } from "./section-renderers/video-embed";
import { PromptExample } from "./section-renderers/prompt-example";
import { KeyPoint } from "./section-renderers/key-point";
import { Callout } from "./section-renderers/callout";
import { CaseStudy } from "./section-renderers/case-study";
import { DiagramBlock } from "./section-renderers/diagram-block";

function renderSection(section: ChapterSection, index: number) {
  switch (section.type) {
    case "paragraph":
      return <Paragraph key={index} content={section.content || ""} />;
    case "heading":
      return <Heading key={index} content={section.content || ""} />;
    case "subheading":
      return (
        <h3 key={index} className="mb-3 mt-8 text-lg font-semibold text-blue-400">
          {section.content}
        </h3>
      );
    case "tip":
      return <TipBox key={index} content={section.content || ""} />;
    case "summary":
      return <SummaryBox key={index} items={section.items || []} />;
    case "video":
      return <VideoEmbed key={index} videoId={section.videoId || ""} label={section.label} />;
    case "prompt-example":
      return <PromptExample key={index} label={section.label} prompt={section.prompt} result={section.result} />;
    case "key-point":
      return <KeyPoint key={index} content={section.content || ""} />;
    case "callout":
      return <Callout key={index} content={section.content || ""} />;
    case "case-study":
      return <CaseStudy key={index} label={section.label} content={section.content} />;
    case "diagram":
      return <DiagramBlock key={index} label={section.label} nodes={section.nodes || []} flow={section.flow} />;
    default:
      return null;
  }
}

export function ChapterContent({ sections }: { sections: ChapterSection[] }) {
  return (
    <div className="animate-fade-in">
      {sections.map((section, i) => renderSection(section, i))}
    </div>
  );
}
