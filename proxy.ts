import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isValidAccountEmail } from "./lib/auth";

export function proxy(request: NextRequest) {
  const session = request.cookies.get("skatementor_session")?.value;
  const { pathname } = request.nextUrl;
  let hasValidSession = false;

  if (session) {
    try {
      hasValidSession = isValidAccountEmail(decodeURIComponent(session));
    } catch {
      hasValidSession = false;
    }
  }

  if (!hasValidSession && pathname !== "/login") {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (hasValidSession && pathname === "/login") {
    const homeUrl = new URL("/", request.url);
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
