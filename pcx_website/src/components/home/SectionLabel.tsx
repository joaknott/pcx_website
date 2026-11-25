export default function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
      <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
        <span className="h-px w-5 bg-orange-500" />
        {children}
      </p>
    );
  }