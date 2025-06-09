import localFont from 'next/font/local'

export const myFont = localFont({
  src: '../app/fonts/SaoChingcha-Regular.otf', // หรือ path ที่ถูกต้อง
  display: 'swap',
  variable: '--font-myfont', // ถ้าใช้กับ Tailwind (optional)
})
