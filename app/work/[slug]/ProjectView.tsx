"use client";

import { getProjectBySlug } from "@/lib/projects";
import { KovaView } from "./views/KovaView";
import { SeroView } from "./views/SeroView";
import { AurumView } from "./views/AurumView";
import { DrftView } from "./views/DrftView";
import { LinxView } from "./views/LinxView";

export function ProjectView({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug);
  if (!project) return null;

  switch (slug) {
    case "kova":
      return <KovaView project={project} />;
    case "sero":
      return <SeroView project={project} />;
    case "aurum":
      return <AurumView project={project} />;
    case "drft":
      return <DrftView project={project} />;
    case "linx":
      return <LinxView project={project} />;
    default:
      return null;
  }
}
