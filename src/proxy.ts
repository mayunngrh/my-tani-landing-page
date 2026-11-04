import { NextRequest, NextResponse } from "next/server";
import { detectLocale, isLocale, localeCookie } from "./i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Explicit locale links always win over saved or detected preferences.
  if (isLocale(pathname.split("/")[1])) return NextResponse.next();

  const saved = request.cookies.get(localeCookie)?.value;
  const locale = isLocale(saved) ? saved : detectLocale(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  const response = NextResponse.redirect(url);
  // Never cache a language-dependent redirect for another visitor.
  response.headers.set("Vary", "Accept-Language, Cookie");
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
