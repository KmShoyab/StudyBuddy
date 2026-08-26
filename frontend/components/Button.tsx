type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-violet-400/50";

  const variants = {
    primary:
      "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-600/20 hover:-translate-y-0.5 hover:shadow-violet-600/40",

    secondary:
      "border border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10",

    ghost:
      "text-zinc-400 hover:bg-white/5 hover:text-white",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}