import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import styles from "./components.module.css";

type Variant = "primary" | "secondary" | "glass";
type Size = "default" | "small";

type ButtonAppearance = {
  variant?: Variant;
  size?: Size;
};

function buttonClasses(variant: Variant, size: Size, className?: string) {
  return [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonAppearance;

export function Button({
  variant = "primary",
  size = "default",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonClasses(variant, size, className)}
      type={type}
      {...props}
    />
  );
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonAppearance & { href: string };

export function ButtonLink({
  variant = "primary",
  size = "default",
  className,
  ...props
}: ButtonLinkProps) {
  return <a className={buttonClasses(variant, size, className)} {...props} />;
}
