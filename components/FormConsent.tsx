"use client";

import { m } from "framer-motion";
import Link from "next/link";

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
};

export function FormConsent({ checked, onChange, error }: Props) {
  return (
    <div className="space-y-1">
      <label className="flex items-start gap-3 cursor-pointer group">
        <button
          type="button"
          role="checkbox"
          aria-checked={checked}
          aria-label="I agree to the Privacy Policy and Terms of Service"
          onClick={() => onChange(!checked)}
          onKeyDown={(e) => {
            if (e.key === " " || e.key === "Enter") {
              e.preventDefault();
              onChange(!checked);
            }
          }}
          className="relative mt-0.5 shrink-0 outline-none"
        >
          <div
            className={`w-5 h-5 rounded border transition-all duration-200 flex items-center justify-center ${
              checked
                ? "bg-[#3B82F6] border-[#3B82F6]"
                : "bg-transparent border-[#222] group-hover:border-[#333]"
            } ${error ? "border-red-500/50" : ""}`}
          >
            {checked && (
              <m.svg
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 6L5 9L10 3"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </m.svg>
            )}
          </div>
        </button>

        <span className="text-[#888] text-sm leading-relaxed">
          I have read and agree to the{" "}
          <Link
            href="/privacy"
            target="_blank"
            className="text-[#3B82F6] hover:text-blue-400 underline underline-offset-2"
            onClick={(e) => e.stopPropagation()}
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/terms"
            target="_blank"
            className="text-[#3B82F6] hover:text-blue-400 underline underline-offset-2"
            onClick={(e) => e.stopPropagation()}
          >
            Terms of Service
          </Link>
          . I consent to Flowtix AI contacting me regarding my inquiry.
        </span>
      </label>

      {error && (
        <m.p
          role="alert"
          aria-live="polite"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-rose-400/80 text-xs pl-8"
        >
          {error}
        </m.p>
      )}
    </div>
  );
}
