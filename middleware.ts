import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // .well-known ile başlayan istekleri bastır
  if (pathname.startsWith("/.well-known")) {
    return new NextResponse(null, { status: 204 }); // 204 = No Content
  }

  return NextResponse.next();
}
