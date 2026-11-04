import "server-only";
import { notFound } from "next/navigation";
import { isLocale } from "./config";

export function requireLocale(value: string) {
  if (!isLocale(value)) notFound();
  return value;
}
