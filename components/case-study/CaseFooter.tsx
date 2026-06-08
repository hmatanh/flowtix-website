"use client";

import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { getNextProject, type Project } from "@/lib/projects";
import { ClientLogo } from "@/components/clients/logos/ClientLogo";

type Props = {
  project: Project;
  techStack?: string[];
  duration?: string;
};

/**
 * CaseFooter - tech / timeline strip + next-project handoff.
 * Calm, minimal. Pentagram / Heydays pacing.
 */
export function CaseFooter({ project, techStack, duration }: Props) {
  const next = getNextProject(project.slug);
  const nb = next.brand;
  const stack = techStack ?? project.stack;
  const dur = duration ?? project.duration;
  const b = project.brand;

  return (
    <>
      {/* Tech / timeline strip */}
      <section
        className="border-y"
        style={{
          borderColor: `rgba(${b.accentRGB},0.10)`,
          background: `linear-gradient(180deg, transparent 0%, rgba(${b.accentRGB},0.02) 50%, transparent 100%)`,
        }}
      >
        <div className="page-container py-14 sm:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
          <div>
            <div
              className="text-[10px] uppercase tracking-[0.22em] mb-5"
              style={{ color: `rgba(${b.accentRGB},0.7)` }}
            >
              Tech stack
            </div>
            <div className="flex flex-wrap gap-2">
              {stack.map((t) => (
                <span
                  key={t}
                  className="text-sm px-4 py-2 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    color: "#bdbdbd",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div
              className="text-[10px] uppercase tracking-[0.22em] mb-5"
              style={{ color: `rgba(${b.accentRGB},0.7)` }}
            >
              Project facts
            </div>
            <dl className="grid grid-cols-2 gap-y-4 text-sm">
              <dt className="text-[#888]">Industry</dt>
              <dd className="text-white">{project.industry}</dd>
              <dt className="text-[#888]">Duration</dt>
              <dd className="text-white">{dur}</dd>
              <dt className="text-[#888]">Team</dt>
              <dd className="text-white">{project.teamLine}</dd>
              <dt className="text-[#888]">Year</dt>
              <dd className="text-white">{project.year}</dd>
            </dl>
          </div>
        </div>
      </section>

      {/* Next project */}
      <Link
        href={`/work/${next.slug}/`}
        className="group block w-full transition-all"
        style={{
          background: nb.dark,
          borderTop: `1px solid ${nb.border}`,
        }}
      >
        <div className="page-container py-12 sm:py-20 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 sm:gap-8">
          <div className="text-center sm:text-left">
            <div
              className="text-[10px] uppercase tracking-[0.22em] mb-3"
              style={{ color: `rgba(${nb.accentRGB},0.7)` }}
            >
              Next case
            </div>
            <div
              className="text-white font-black tracking-tight"
              style={{
                fontSize: "clamp(26px, 4.5vw, 48px)",
                lineHeight: 1.05,
              }}
            >
              {next.name}
            </div>
            <div
              className="text-sm sm:text-base mt-2 max-w-sm mx-auto sm:mx-0"
              style={{ color: `rgba(${nb.accentRGB},0.7)` }}
            >
              {next.tagline}
            </div>
          </div>
          <div className="flex items-center gap-4 sm:gap-5 flex-wrap justify-center">
            <ClientLogo slug={next.slug} height={36} />
            <span
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-transform group-hover:translate-x-1"
              style={{
                background: `rgba(${nb.accentRGB},0.10)`,
                color: nb.primary,
                border: `1px solid rgba(${nb.accentRGB},0.20)`,
              }}
            >
              Continue
              <IconArrowRight size={14} stroke={2} />
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
