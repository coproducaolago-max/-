import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type SectionVariant = "light" | "dark" | "sand" | "navy-deep" | "off-white";

interface SectionProps {
  id?: string;
  variant?: SectionVariant;
  className?: string;
  contentClassName?: string;
  children: React.ReactNode;
}

const sectionVariantClass: Record<SectionVariant, string> = {
  light: "bg-[var(--bg-secondary)] text-[var(--text-primary)]",
  dark: "bg-[#1B3A52] text-white",
  sand: "bg-[#F0F9FC] text-[#1B3A52]",
  "navy-deep": "bg-[#0D2233] text-white",
  "off-white": "bg-[#FAFAFA] text-[#1B3A52]",
};

const isDarkVariant = (variant: SectionVariant) =>
  variant === "dark" || variant === "light" || variant === "navy-deep";

export const Section = ({
  id,
  variant = "light",
  className,
  contentClassName,
  children,
}: SectionProps) => (
  <section
    id={id}
    className={cn(
      "py-[80px] md:py-[96px] animate-on-scroll",
      sectionVariantClass[variant],
      className,
    )}
  >
    <div className={cn("vb-container", contentClassName)}>
      {children}
    </div>
  </section>
);

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  darkBg?: boolean;
  className?: string;
}

export const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
  darkBg,
  className,
}: SectionTitleProps) => {
  const onDarkBg = darkBg ?? light;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={cn(centered && "text-center", className)}
    >
      {eyebrow && (
        <p
          className={cn(
            "font-sans text-[0.68rem] font-semibold uppercase tracking-[1.5px] mb-3",
            onDarkBg ? "text-[#D4A840]" : "text-[#5BBFD4]",
          )}
        >
          {eyebrow}
        </p>
      )}
      <div className={cn("relative inline-block pb-5", centered && "mx-auto")}>
        <h2
          className={cn(
            "font-display font-bold leading-[1.2] tracking-[-0.3px]",
            "text-[clamp(32px,3.5vw,48px)]",
            onDarkBg ? "text-white" : "text-[#1B3A52]",
          )}
        >
          {title}
        </h2>
        {/* Golden ornamental underline */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-[#D4A840] to-[#B8893A] rounded-full" />
      </div>
      {subtitle && (
        <p
          className={cn(
            "font-body text-[17px] leading-[1.8] mt-3 max-w-[600px]",
            centered && "mx-auto",
            onDarkBg ? "text-gray-300" : "text-gray-500",
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export { isDarkVariant };
