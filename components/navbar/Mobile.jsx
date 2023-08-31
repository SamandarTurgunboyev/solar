import { navbarData } from '@/data/navbar'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'next-i18next'

const Mobile = ({ open }) => {
  const { t } = useTranslation('common')
  return (
    <div className='xl:hidden z-50 block absolute w-full top-[120px] left-0 mx-auto overflow-hidden'>
      <ul className={`w-[90%] overflow-hidden max-w-[800px] mx-auto bg-white duration-300 box-shadow ${open ? "translate-y-0 opacity-1" : "-translate-y-full opacity-0"}`}>
        {navbarData.map((data) => {
          return (
            <li key={data.id} className='text-black cursor-pointer border hover:bg-[#f2f2f2] border-t-0 border-l-0 border-r-0 last:border-b-0'>
              <Link href={data.link} className='w-full h-full block px-8 py-4'>
                {t(data.title)}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Mobile