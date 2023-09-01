import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className="bg-[url('/images/site_about_bg.jpg')] bg-cover w-full h-[300px] relative">
            <div className='w-full absolute mt-[80px]'>
                <div className='relative text-center'>
                    <h2 className='text-5xl text-blue font-barlowBlack'>
                        Kompaniya haqida
                    </h2>
                    <ul className='list-none flex justify-center gap-[20px] mt-[20px]'>
                        <Link href='/'>
                            <li className='text-white site_ab cursor-pointer relative font-barlowBold hover:text-yellow'>
                                Home
                            </li>
                        </Link>
                        <li className='text-blue font-barlowBold'>
                            Kompaniya haqida
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header