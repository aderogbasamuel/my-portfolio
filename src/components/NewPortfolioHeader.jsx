
import { useState } from "react";
import { X, ArrowUpRight } from "lucide-react";

export default function NewPortfolioBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative z-50 bg-black border-b border-white/10 font-space-grotesk">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-3 flex items-center justify-between gap-4">
        <a
          href="https://devdrogba.me"
          className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors duration-300 group"
        >
          <span className="hidden sm:inline-flex h-2 w-2 rounded-full bg-blue-400 animate-pulse flex-shrink-0" />
          <span>
            This is an older version of my portfolio.{" "}
            <span className="text-white font-medium underline underline-offset-4 decoration-white/30 group-hover:decoration-white">
              Visit the latest one
            </span>
          </span>
          <ArrowUpRight
            size={14}
            className="hidden sm:inline transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="text-gray-500 hover:text-white transition-colors duration-300 flex-shrink-0"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}