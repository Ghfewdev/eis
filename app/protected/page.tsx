'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import logo from '../../public/logo.png'
import logo1 from '../../public/health.png'
import logo2 from '../../public/data.png'
import logo3 from '../../public/budget.png'
import logo4 from '../../public/search_0.png'
import logo5 from '../../public/bhz.png'
import logo6 from '../../public/run.png'
import logo7 from '../../public/map.png'
import logo8 from '../../public/policy.png'

export default function ProtectedPage() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('/api/me')
      if (!res.ok) return router.push('/login')

      const data = await res.json()
      setUser(data.user)
    }

    fetchUser()
  }, [])

  const logout = async () => {
    await fetch('/api/logout', {
      method: 'POST',
    })
    router.push('/login')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      {/* <h1 className="text-4xl font-bold mb-4">{user?.username} 🎉</h1> */}
      <Image
        alt='logo'
        src={logo}
        height={180}
      />
      <div className='p-3'>
        <h1 className="text-4xl font-bold">EIS MSD</h1>
      </div>

      <br />
      {/* <p className="mb-6">ระบบของสำนักการแพทย์</p> */}
      <div className='grid grid-cols-2 lg:grid-cols-3'>
        
<a
          href={"https://health2.bangkok.go.th/"}
          target="_blank" rel="noopener noreferrer"
          className="px-6 py-2"
        >

          <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
            <div className='flex flex-col items-center justify-center pb-4'>
              <Image
                alt='logo1'
                src={logo1}
                height={50}
              />

            </div>

            <div className='sm:sm:col-span-2 p-3 bg-[#92CA68] text-white rounded-4xl hover:bg-blue-300 text-center'>
              ตรวจสุขภาพ
            </div>
          </div>
        </a>

<a
          href={"https://www.appsheet.com/start/5a5fea49-fcf1-4247-890a-2b1c1a5c8161"}
          target="_blank" rel="noopener noreferrer"
          className="px-6 py-2"
        >

          <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
            <div className='flex flex-col items-center justify-center'>
              <div className='flex flex-col items-center justify-center pb-4'>
              <Image
                alt='logo6'
                src={logo6}
                height={50}
              />

            </div>

            </div>


            <div className='sm:sm:col-span-2 p-3 bg-[#92CA68] text-white rounded-4xl hover:bg-blue-300 text-center'>
              วิ่งล้อมเมือง
            </div>
          </div>
        </a>

        

        <a
          href={"https://healthmap.bangkok.go.th/"}
          target="_blank" rel="noopener noreferrer"
          className="px-6 py-2"
        >

          <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
            <div className='flex flex-col items-center justify-center'>
              <div className='flex flex-col items-center justify-center pb-4'>
              <Image
                alt='logo7'
                src={logo7}
                height={50}
              />

            </div>

            </div>


            <div className='sm:sm:col-span-2 p-3 bg-[#92CA68] text-white rounded-4xl hover:bg-blue-300 text-center'>
              Bangkok Health Map
            </div>
          </div>
        </a>

        <a
          href={"https://policy.bangkok.go.th/tracking/frontend/web/index.php?r=site/index"}
          target="_blank" rel="noopener noreferrer"
          className="px-6 py-2"
        >

          <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
            <div className='flex flex-col items-center justify-center'>
              <div className='flex flex-col items-center justify-center pb-4'>
              <Image
                alt='logo8'
                src={logo8}
                height={50}
              />

            </div>

            </div>


            <div className='sm:sm:col-span-2 p-3 bg-[#92CA68] text-white rounded-4xl hover:bg-blue-300 text-center'>
              BMA Policy Tracking
            </div>
          </div>
        </a>

        <a
          href={"https://lookerstudio.google.com/reporting/729bad69-a870-4b42-ad0f-1e62ed539d0d"}
          target="_blank" rel="noopener noreferrer"
          className="px-6 py-2"
        >
          <div className='grid lg:grid-cols-3 sm:grid-cols-1'>

            <div className='flex flex-col items-center justify-center pl-2 pb-4'>
              <Image
                alt='logo4'
                src={logo4}
                height={50}
              />

            </div>

            <div className='sm:sm:col-span-2 p-3 bg-[#92CA68] text-white rounded-4xl hover:bg-blue-300 text-center'>
              ความพึงพอใจ นอก/ใน
            </div>

          </div>
        </a>

        <a
          href={"https://app.powerbi.com/Redirect?action=OpenApp&appId=ea27f370-2aa8-450f-85d5-73465ef8e7f4&ctid=dc1b7874-15e2-4d3c-9adf-ea491e366dae&experience=power-bi"}
          target="_blank" rel="noopener noreferrer"
          className="px-6 py-2"
        >
          <div className='grid lg:grid-cols-3 sm:grid-cols-1'>

            <div className='flex flex-col items-center justify-center pb-4'>
              <Image
                alt='logo2'
                src={logo2}
                height={50}
              />

            </div>

            <div className='sm:sm:col-span-2 p-3 bg-[#92CA68] text-white rounded-4xl hover:bg-blue-300 text-center'>
              Data Center
            </div>

          </div>
        </a>


       
        <a
          href={"http://msdmec.go.th/financial/"}
          target="_blank" rel="noopener noreferrer"
          className="px-6 py-2"
        >

          <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
            <div className='flex flex-col items-center justify-center pb-4'>
              <Image
                alt='logo3'
                src={logo3}
                height={50}
              />

            </div>

            <div className='sm:sm:col-span-2 p-3 bg-[#92CA68] text-white rounded-4xl hover:bg-blue-300 text-center'>
              งบประมาณ
            </div>
          </div>
        </a>

        

        

        <a
          href={"http://msdmec.go.th/bhz/admin.php"}
          target="_blank" rel="noopener noreferrer"
          className="px-6 py-2 "
        >

          <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
            <div className='flex flex-col items-center justify-center pb-4'>
              <Image
                alt='logo5'
                src={logo5}
                height={50}
              />

            </div>


            <div className='sm:sm:col-span-2 p-3 bg-[#92CA68] text-white rounded-4xl hover:bg-blue-300 text-center'>
              BHZ
            </div>
          </div>
        </a>

        

      </div>

      <br />
      <br />

      <button
        onClick={logout}
        className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-300 cursor-pointer"
      >
        ออกจากระบบ
      </button>
    </div>

  )
}
