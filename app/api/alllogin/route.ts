// app/api/set-cookie/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const res = NextResponse.json({ message: 'Cookie has been set' })

  res.cookies.set('PHPSESSID2', '044607b587f8fc53bece0db0e5dd75cc', {
    httpOnly: true,                      // ป้องกัน JavaScript access (กัน XSS)
    secure: process.env.NODE_ENV === 'production', // ใช้กับ HTTPS เท่านั้นใน production
    path: '/',                          // ใช้ได้ทั้งเว็บ
    maxAge: 60 * 60,
  })

  return res
}
