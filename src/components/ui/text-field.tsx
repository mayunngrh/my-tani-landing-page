import type { InputHTMLAttributes } from "react";
import styles from "./components.module.css";

type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "id"> & {
  id: string;
  label: string;
  hint?: string;
  error?: string;
};

export function TextField({ id, label, hint, error, className, ...props }: TextFieldProps) {
  const descriptionId = error ? `${id}-error` : hint ? `${id}-hint` : undefined;

  return (
    <div className={[styles.field, className].filter(Boolean).join(" ")}>
      <label className={styles.label} htmlFor={id}>
        {label}
        {props.required && <span aria-hidden="true"> *</span>}
      </label>
      <input
        {...props}
        id={id}
        className={styles.input}
        aria-invalid={error ? true : undefined}
        aria-describedby={descriptionId}
      />
      {error ? (
        <p className={styles.error} id={`${id}-error`}>{error}</p>
      ) : hint ? (
        <p className={styles.hint} id={`${id}-hint`}>{hint}</p>
      ) : null}
    </div>
  );
}
