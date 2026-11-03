import type { HTMLAttributes } from "react";
import styles from "./components.module.css";

type GlassPanelProps = HTMLAttributes<HTMLDivElement> & {
  tone?: "light" | "dark";
};

export function GlassPanel({
  tone = "light",
  className,
  ...props
}: GlassPanelProps) {
  const classes = [
    "glass-surface",
    tone === "dark" && "glass-surface--dark",
    styles.glassPanel,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes} {...props} />;
}
