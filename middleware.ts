import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest): Promise<NextResponse> {
  if (request.method === 'GET') {
    const response = NextResponse.next();
    const token = request.cookies.get('session')?.value ?? null;
    if (token !== null) {
      response.cookies.set('session', token, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
      });
    };
    return response;
  }
  return NextResponse.next();
}
