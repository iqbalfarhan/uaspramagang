import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const authorized = request.cookies.get("authorized")?.value === "true";
  const nextUrl = request.nextUrl;

  // Jika pengguna sudah terauthorisasi dan mencoba mengakses /login, redirect ke home
  if (authorized && nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Jika pengguna belum terauthorisasi dan mencoba mengakses selain /login, redirect ke /login
  if (!authorized && nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Jika pengguna terauthorisasi dan mencoba mengakses selain /login, atau belum terauthorisasi dan mencoba mengakses /login, biarkan request berlanjut
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
