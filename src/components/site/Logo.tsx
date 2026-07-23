export function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2.5 font-bold tracking-tight select-none ${className}`}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-brand via-brand/90 to-amber-500 shadow-md shadow-brand/20">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4.5 w-4.5 text-white"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      </div>
      <span className="text-lg font-bold tracking-tight text-foreground">
        TalentGro <span className="text-brand">Quest</span>
      </span>
    </div>
  );
}

