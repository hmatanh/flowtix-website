"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { IconArrowRight, IconChevronLeft } from "@tabler/icons-react";
import { getNextProject, type Project } from "@/lib/projects";
import { ClientLogo } from "@/components/clients/logos/ClientLogo";

export function ProjectBreadcrumb({ project }: { project: Project }) {
  return (
    <div className="flex items-center justify-between mb-8 text-xs">
      <Link
        href="/work"
        className="inline-flex items-center gap-1.5 text-[#666] hover:text-white transition-colors"
        style={{ color: project.brand.textOnBrand }}
      >
        <IconChevronLeft size={12} stroke={2} />
        Back to Work
      </Link>
      <div className="text-[#222] tracking-widest uppercase">
        Work <span className="text-[#444]">/</span> {project.displayName}
      </div>
    </div>
  );
}

export function ProjectMetricsBar({ project }: { project: Project }) {
  return (
    <section className="section-contain bg-[#030303] border-y border-[#0a0a0a] py-6 px-6 md:px-10 xl:px-12">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Client", value: project.name },
          { label: "Year", value: project.year },
          { label: "Duration", value: project.duration },
          { label: "Industry", value: project.industry },
        ].map((s) => (
          <div key={s.label}>
            <div className="text-[#222] text-[10px] tracking-widest uppercase">
              {s.label}
            </div>
            <div
              className="text-sm mt-1 font-semibold"
              style={{ color: project.brand.textOnBrand }}
            >
              {s.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProjectResults({ project }: { project: Project }) {
  const b = project.brand;
  return (
    <section className="section-contain py-20 lg:py-24 px-6 md:px-10 xl:px-12">
      <div className="max-w-5xl mx-auto">
        <div
          className="text-[10px] tracking-widest uppercase mb-3"
          style={{ color: b.primary, opacity: 0.7 }}
        >
          By the numbers
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
          The outcomes.
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.results.map((r) => (
            <m.div
              key={r.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl p-8 border"
              style={{
                background: b.card,
                borderColor: b.border,
              }}
            >
              <div
                className="font-black tracking-tighter leading-none"
                style={{
                  fontSize: "clamp(40px, 5vw, 64px)",
                  color: b.primary,
                }}
              >
                {r.value}
              </div>
              <div
                className="text-sm mt-4 leading-relaxed"
                style={{ color: b.textOnBrand, opacity: 0.85 }}
              >
                {r.label}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectTestimonial({ project }: { project: Project }) {
  const b = project.brand;
  return (
    <section
      className="section-contain py-16 lg:py-20 px-6 md:px-10 xl:px-12"
      style={{ background: b.dark }}
    >
      <div className="max-w-3xl mx-auto">
        <div
          className="rounded-2xl border p-8 lg:p-10"
          style={{
            background: b.card,
            borderColor: b.border,
          }}
        >
          <div
            className="font-black leading-none"
            style={{ fontSize: 56, color: b.primary, opacity: 0.5 }}
            aria-hidden="true"
          >
            “
          </div>
          <p
            className="text-lg lg:text-xl italic font-light leading-relaxed mt-2"
            style={{ color: "#dddddd" }}
          >
            {project.testimonial.quote}
          </p>
          <div
            className="mt-6 text-sm tracking-wide"
            style={{ color: b.textOnBrand, opacity: 0.7 }}
          >
            — {project.testimonial.attribution}
          </div>
        </div>
        <div className="text-[#1a1a1a] text-[10px] text-center mt-4">
          Names and details are fictional. Representative of client outcomes.
        </div>
      </div>
    </section>
  );
}

export function ProjectStack({ project }: { project: Project }) {
  const b = project.brand;
  return (
    <section className="section-contain py-12 px-6 md:px-10 xl:px-12 border-y border-[#0a0a0a]">
      <div className="max-w-5xl mx-auto text-center">
        <div
          className="text-[10px] tracking-widest uppercase mb-6"
          style={{ color: b.primary, opacity: 0.6 }}
        >
          Technologies used
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="text-sm px-4 py-2 rounded-full"
              style={{
                background: b.card,
                color: b.textOnBrand,
                border: `1px solid ${b.border}`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectNextLink({ project }: { project: Project }) {
  const next = getNextProject(project.slug);
  return (
    <Link
      href={`/work/${next.slug}/`}
      className="block section-contain border-t border-[#0a0a0a] py-12 px-6 md:px-10 xl:px-12 group"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 flex-wrap">
        <div className="text-[#444] text-sm">
          <span className="text-[#222] text-[10px] uppercase tracking-widest block mb-1">
            Next case study
          </span>
          The story continues →
        </div>
        <div className="flex items-center gap-4 transition-transform group-hover:-translate-x-1">
          <ClientLogo slug={next.slug} height={36} />
          <IconArrowRight
            size={20}
            stroke={2}
            className="text-[#444] group-hover:text-white group-hover:translate-x-0.5 transition-all"
          />
        </div>
      </div>
    </Link>
  );
}

export function ProjectBottomCTA({ project }: { project: Project }) {
  const b = project.brand;
  return (
    <section className="section-contain relative py-20 lg:py-24 px-6 md:px-10 xl:px-12 overflow-hidden text-center">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[260px] rounded-full pointer-events-none"
        style={{
          background: `rgba(${b.accentRGB}, 1)`,
          opacity: 0.04,
          filter: "blur(140px)",
        }}
      />
      <div className="relative max-w-2xl mx-auto">
        <h2
          className="font-black tracking-tighter text-white leading-tight"
          style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
        >
          Want something like this?
        </h2>
        <p className="text-[#666] mt-4 leading-relaxed">
          Book a free 30-minute discovery call. We&apos;ll talk specifics —
          your problem, your stack, your timeline.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-[#eee] transition-colors min-h-[44px]"
          >
            Start a project
            <IconArrowRight size={14} stroke={2} />
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center border border-[#222] text-[#888] px-7 py-3.5 rounded-xl text-sm hover:border-[#444] hover:text-white transition-colors min-h-[44px]"
          >
            See more work →
          </Link>
        </div>
      </div>
    </section>
  );
}
