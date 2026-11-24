/*
    This component is used to display an eyebrow/separator line with a text. Pretty simple.
    Also, it can be used many times in the future.
*/

export default function Eyebrow({ children }: { children: React.ReactNode }) {
    return (
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
        <span className="h-px w-7 bg-orange-500" />
        {children}
      </p>
    );
  }