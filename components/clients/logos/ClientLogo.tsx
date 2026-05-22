import { KovaLogo } from "./KovaLogo";
import { SeroLogo } from "./SeroLogo";
import { AurumLogo } from "./AurumLogo";
import { DrftLogo } from "./DrftLogo";
import { LinxLogo } from "./LinxLogo";

export function ClientLogo({
  slug,
  height = 28,
  className = "",
}: {
  slug: string;
  height?: number;
  className?: string;
}) {
  switch (slug) {
    case "kova":
      return <KovaLogo height={height} className={className} />;
    case "sero":
      return <SeroLogo height={height} className={className} />;
    case "aurum":
      return <AurumLogo height={height} className={className} />;
    case "drft":
      return <DrftLogo height={height} className={className} />;
    case "linx":
      return <LinxLogo height={height} className={className} />;
    default:
      return null;
  }
}
