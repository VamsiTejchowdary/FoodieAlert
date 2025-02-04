import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;


  if (token && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Redirect logged-out users away from /dashboard to /login
  if (!token && pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}


export const config = {
  matcher: ["/login", "/register", "/dashboard"], // Monitor these routes
};