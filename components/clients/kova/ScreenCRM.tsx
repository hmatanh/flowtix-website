import { IconRobot, IconFilter } from "@tabler/icons-react";

type Deal = {
  client: string;
  address: string;
  price: string;
  age: string;
  ai?: boolean;
};

const COLUMNS: { label: string; count: number; total: string; deals: Deal[] }[] = [
  {
    label: "New Lead",
    count: 12,
    total: "$5.4M",
    deals: [
      { client: "M. Carrillo", address: "Riverside · 2 bed", price: "$398K", age: "2h", ai: true },
      { client: "S. Park", address: "Center · 3 bed", price: "$525K", age: "5h" },
      { client: "R. Kim", address: "Riverside · 3 bed", price: "$485K", age: "1d" },
    ],
  },
  {
    label: "Contacted",
    count: 8,
    total: "$3.8M",
    deals: [
      { client: "J. Mendez", address: "Hilltop · 4 bed", price: "$612K", age: "3d" },
      { client: "T. Hayes", address: "Lakeside · 2 bed", price: "$440K", age: "4d" },
    ],
  },
  {
    label: "Viewing",
    count: 6,
    total: "$3.1M",
    deals: [
      { client: "Marcus T.", address: "Elm Court 4B", price: "$485K", age: "today" },
      { client: "A. Brennan", address: "Bay View 7C", price: "$540K", age: "tomorrow" },
    ],
  },
  {
    label: "Offer",
    count: 4,
    total: "$2.3M",
    deals: [
      { client: "L. Nakamura", address: "Park Lane 18", price: "$498K", age: "pending" },
      { client: "D. Okafor", address: "Oak Vista 21", price: "$425K", age: "review" },
    ],
  },
  {
    label: "Closed",
    count: 5,
    total: "$2.7M",
    deals: [
      { client: "C. Velasco", address: "Linden Sq 4", price: "$455K", age: "May 8" },
      { client: "R. Singh", address: "Maple Crest", price: "$620K", age: "May 3" },
    ],
  },
];

export function ScreenCRM() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: "#0A1628" }}>
      {/* Header */}
      <div
        className="flex items-center justify-between p-3 border-b"
        style={{ background: "#0C1A2E", borderColor: "rgba(14,165,233,0.15)" }}
      >
        <div>
          <div className="text-white text-sm font-bold">CRM Pipeline</div>
          <div className="text-[9px]" style={{ color: "#4a6b8a" }}>
            47 active deals · $17.3M total
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          {["This week", "All agents", "Type"].map((f) => (
            <span
              key={f}
              className="text-[9px] px-2 py-1 rounded inline-flex items-center gap-1"
              style={{
                background: "#0D1F38",
                color: "#7ab3d0",
                border: "1px solid rgba(14,165,233,0.15)",
              }}
            >
              <IconFilter size={9} stroke={1.5} />
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Kanban board */}
      <div className="flex-1 p-3 grid grid-cols-5 gap-2 overflow-hidden">
        {COLUMNS.map((col) => (
          <div
            key={col.label}
            className="rounded-md flex flex-col min-h-0 overflow-hidden"
            style={{ background: "#070D1A" }}
          >
            <div className="px-2 py-1.5 flex items-center justify-between">
              <span className="text-white text-[10px] font-semibold tracking-tight">
                {col.label}
              </span>
              <span
                className="text-[8px] px-1.5 py-0.5 rounded-full font-semibold"
                style={{
                  background: "rgba(14,165,233,0.15)",
                  color: "#7dd3fc",
                }}
              >
                {col.count}
              </span>
            </div>
            <div className="text-[8px] px-2" style={{ color: "#2a4a6a" }}>
              {col.total} total
            </div>
            <div className="p-1.5 space-y-1.5 overflow-hidden">
              {col.deals.map((d, i) => (
                <div
                  key={`${col.label}-${i}`}
                  className="rounded-md p-2 border"
                  style={{
                    background: "#0D1F38",
                    borderColor: d.ai
                      ? "transparent"
                      : "rgba(14,165,233,0.12)",
                    borderLeft: d.ai
                      ? "2px solid #0EA5E9"
                      : "1px solid rgba(14,165,233,0.12)",
                  }}
                >
                  <div className="flex items-start justify-between gap-1">
                    <div className="text-white text-[9px] font-medium truncate">
                      {d.client}
                    </div>
                    {d.ai && (
                      <IconRobot size={9} stroke={1.5} color="#0EA5E9" />
                    )}
                  </div>
                  <div className="text-[8px] mt-0.5 truncate" style={{ color: "#4a6b8a" }}>
                    {d.address}
                  </div>
                  <div className="flex items-center justify-between mt-1.5">
                    <span className="text-[9px] font-semibold" style={{ color: "#0EA5E9" }}>
                      {d.price}
                    </span>
                    <span className="text-[7px]" style={{ color: "#2a4a6a" }}>
                      {d.age}
                    </span>
                  </div>
                  {d.ai && (
                    <div
                      className="text-[8px] mt-1.5 inline-flex items-center gap-1 leading-tight"
                      style={{ color: "#0EA5E9" }}
                    >
                      <IconRobot size={8} stroke={1.5} />
                      AI: Follow-up scheduled tomorrow
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
