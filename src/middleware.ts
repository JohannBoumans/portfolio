import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === `/`) {
    // return detectAndRedirect(request, pathname);
    return NextResponse.redirect(new URL(`/fr-be`, request.url));
  }
}

export const config = {
  runtime: `experimental-edge`,
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    `/((?!api|_next/static|_next/image|favicon.ico).*)`,
  ],
};
