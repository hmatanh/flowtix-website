"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { projects, type Project } from "@/lib/projects";
import { FadeIn } from "@/components/animations/FadeIn";
import { ClientLogo } from "@/components/clients/logos/ClientLogo";
import { ListingMockup } from "@/components/projects/ListingMockups";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const HEADLINE = "Work that speaks for itself.";

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

function ProjectCard({
  project,
  size = "default",
}: {
  project: Project;
  size?: "default" | "large";
}) {
  const b = project.brand;
  return (
    <Link
      href={`/work/${project.slug}/`}
      className="group relative block rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 min-h-[460px]"
      style={{
        background: b.dark,
        borderColor: "rgba(255,255,255,0.04)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = b.border.replace("0.15", "0.4");
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)";
      }}
    >
      {/* Brand gradient hint */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity"
        style={{
          opacity: 0.18,
          background: `radial-gradient(ellipse 60% 50% at 80% 20%, rgba(${b.accentRGB},0.35), transparent 60%)`,
        }}
        aria-hidden="true"
      />

      <div
        className={`relative grid grid-cols-1 ${
          size === "large" ? "lg:grid-cols-[1.05fr_1fr]" : ""
        } gap-8 lg:gap-10 p-8 lg:p-10`}
      >
        {/* Text side */}
        <div className="flex flex-col">
          <div className="h-10 flex items-center">
            <ClientLogo slug={project.slug} height={32} />
          </div>

          <div className="text-[#444] text-xs tracking-widest uppercase mt-6">
            {project.industry}
          </div>
          <h3 className="text-white text-2xl lg:text-3xl font-bold mt-2 tracking-tight">
            {project.tagline}
          </h3>
          <p className="text-[#888] text-sm mt-4 leading-relaxed max-w-md">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.services.slice(0, 4).map((s) => (
              <span
                key={s}
                className="text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full"
                style={{
                  background: `rgba(${b.accentRGB},0.08)`,
                  color: b.textOnBrand,
                  border: `1px solid rgba(${b.accentRGB},0.18)`,
                }}
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-8 flex items-center justify-between">
            <span className="text-[#444] text-xs">{project.year}</span>
            <span
              className="inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all"
              style={{ color: b.textOnBrand }}
            >
              View Case Study
              <IconArrowRight
                size={14}
                stroke={2}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </div>

        {/* Mockup side */}
        <div className="flex items-center justify-center min-h-[280px]">
          <ListingMockup slug={project.slug} />
        </div>
      </div>
    </Link>
  );
}

export default function WorkPage() {
  const [kova, sero, aurum, drft, linx] = projects;
  return (
    <>
      <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-600 opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-[#333] text-[10px] tracking-widest uppercase mb-6">
              Selected Work
            </div>
          </FadeIn>
          <h1
            className="font-black tracking-tighter text-white leading-[1.05]"
            style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
          >
            <m.span
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.06, delayChildren: 0.1 }}
            >
              {HEADLINE.split(" ").map((w, i) => (
                <m.span
                  key={i}
                  variants={wordVariants}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="inline-block mr-[0.25em]"
                >
                  {w}
                </m.span>
              ))}
            </m.span>
          </h1>
          <FadeIn delay={0.5}>
            <p className="text-[#888] mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
              Five projects across five industries. Different problems,
              different solutions, one standard: exceptional.
            </p>
            <p className="text-[#1a1a1a] text-xs mt-6">
              Client names are fictional. Work and results are representative.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-contain px-4 sm:px-6 lg:px-8 pb-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Row 1 — KOVA full width */}
          <FadeIn>
            <ProjectCard project={kova} size="large" />
          </FadeIn>

          {/* Row 2 — SERŌ + AURUM side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn delay={0.05}>
              <ProjectCard project={sero} />
            </FadeIn>
            <FadeIn delay={0.1}>
              <ProjectCard project={aurum} />
            </FadeIn>
          </div>

          {/* Row 3 — DRFT full width */}
          <FadeIn delay={0.05}>
            <ProjectCard project={drft} size="large" />
          </FadeIn>

          {/* Row 4 — LINX */}
          <FadeIn delay={0.05}>
            <ProjectCard project={linx} size="large" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
