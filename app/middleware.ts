// middleware.ts
import { NextRequest, NextResponse } from 'next/server'
import { verifyJwt } from './lib/auth'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value
  const isProtected = req.nextUrl.pathname.startsWith('/protected')

  if (isProtected && (!token || !verifyJwt(token))) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/protected/:path*'],
}
