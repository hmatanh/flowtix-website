export function FormGDPR() {
  return (
    <div className="flex items-start gap-3 bg-[#080808] border border-[#1a1a1a] rounded-xl px-4 py-3">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="shrink-0 mt-0.5 text-[#333]"
        aria-hidden="true"
      >
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" />
        <path
          d="M8 7v4M8 5v1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <p className="text-[#444] text-[11px] leading-relaxed">
        Your information is used only to respond to your inquiry. We never sell
        data or send unsolicited emails. You can request deletion at any time
        by emailing{" "}
        <a
          href="mailto:office@flowtix.ai"
          className="text-[#666] hover:text-white underline underline-offset-2"
        >
          office@flowtix.ai
        </a>
        .
      </p>
    </div>
  );
}
