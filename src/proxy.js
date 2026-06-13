import { NextResponse } from "next/server";

const AUTH_ROUTES = ["/cms/login", "/cms/forgot-password", "/cms/reset-password"];

/**
 * Lightweight auth gate.
 *
 * In mock mode the session is a cookie named `austelix_session` (written by
 * authService.login). For real auth, replace the cookie check below with your
 * session/JWT verification — the routing logic stays the same.
 *
 * @param {import("next/server").NextRequest} request
 */
export function proxy(request) {
  const { pathname } = request.nextUrl;
  const isAuthed = Boolean(request.cookies.get("austelix_session"));
  const isAuthRoute = AUTH_ROUTES.some((r) => pathname.startsWith(r));

  // Unauthenticated users can only see auth routes.

  if (!isAuthed && !isAuthRoute && request.nextUrl.pathname!=="/") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Authenticated users shouldn't sit on the login screen.
  if (isAuthed && isAuthRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/cms/dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  // Run on everything except Next internals, the API, and static assets.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
