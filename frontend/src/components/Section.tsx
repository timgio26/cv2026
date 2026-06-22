type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export function Section({ title, children }: SectionProps) {
  return (
    <div className="w-[90%] lg:w-[50%] max-w-3xl mx-auto flex flex-col gap-6">
      <span className="text-2xl font-semibold tracking-wide border-b border-white/10 pb-2">
        {title}
      </span>
      {children}
    </div>
  );
}
