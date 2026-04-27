interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 bg-white/5 py-1.5 px-3 rounded-lg border border-white/10 ${className}`}>
      <img src="/logo-intec.png" alt="INTEC" className="h-8 w-auto drop-shadow-sm" />
    </div>
  );
}

