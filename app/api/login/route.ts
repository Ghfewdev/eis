// /api/login/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { signJwt } from '@/app/lib/auth'

export async function POST(req: NextRequest) {
  const { username, password } = await req.json()

  if (username === process.env.NEXT_PUBLIC_USER1 && process.env.NEXT_PUBLIC_PASSWORD1) {
    const token = signJwt({ username })

    const response = NextResponse.json({ message: 'Login success' })
    response.cookies.set('token', token, {
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60, // 1 ชั่วโมง
    })

    return response
  }

  else if (username === 'admin.cut' && password === '1234') {
    const token = signJwt({ username })

    const response = NextResponse.json({ message: 'Login success' })
    response.cookies.set('token', token, {
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60, // 1 ชั่วโมง
    })

    return response
  }

  else if (username === 'admin.tks' && password === '1234') {
    const token = signJwt({ username })

    const response = NextResponse.json({ message: 'Login success' })
    response.cookies.set('token', token, {
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60, // 1 ชั่วโมง
    })

    return response
  }

  return NextResponse.json({ message: 'ชื่อผู้เข้าใช้งาน หรือ รหัสผ่านผิด' }, { status: 401 })
}
