'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import logo from '../../public/logo.png'
import Image from 'next/image'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    })

    if (res.ok) {
      router.push('/protected')
    } else {
      const data = await res.json()
      setError(data.message)
    }
  }

  return (
    // <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-800 via-green-600 to-green-400">
    <div className="min-h-screen flex items-center justify-center bg-[#DDF2D1]">



      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg"
      >
        <div className='grid grid-cols-5'>

          <div className='col-span-2 pr-3'>
            <Image
              alt='logo'
              src={logo}
              height={180}
            />
            <h2 className="text-2xl font-bold text-center mb-6">EIS MSD</h2>

          </div>

          <div className=' col-span-3'>
            <h2 className="text-2xl font-bold text-center mb-6">ลงชื่อเข้าใช้งาน</h2>

            <input
              type="text"
              placeholder="ชื่อผู้เข้าใช้งาน"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <input
              type="password"
              placeholder="รหัสผ่าน"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            <button
              type="submit"
              className="w-full bg-[#33539E] text-white py-2 rounded-lg hover:bg-[#92CA68] transition"
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </div>
      </form>

    </div>
  )
}
