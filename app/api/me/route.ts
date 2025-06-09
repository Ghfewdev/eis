// /api/me/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { verifyJwt } from '@/app/lib/auth'

export async function GET(req: NextRequest) {
  const token = req.cookies.get('token')?.value

  if (!token) {
    return NextResponse.json({ message: 'No token' }, { status: 401 })
  }

  const user = verifyJwt(token)

  if (!user) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
  }

  return NextResponse.json({ user })
}
