import React from 'react'
import Link from 'next/link'

const about = () => {
    return (
        <div className="bg-[url('/images/about_bg.jpg')] bg-cover w-full md:h-[700px] h-[400px] relative">
            <div className='md:w-[60%] w-full absolute top-[100px] p-4'>
                <div className='bg-blue/[0.8] w-full relative md:p-[100px] p-[15px]'>
                    <span className='relative font-semibold lg:text-base text-sm text-yellow'>
                        Bizning Аfzalliklarimiz
                    </span>
                    <h2 className='lg:text-5xl text-2xl text-white font-black mt-[10px]'>Bizning kompaniyamizni tanlang</h2>
                    <Link href='/site/about'>
                        <button className='mt-[10px] text-white button-hover before:!bg-blue flex flex-row items-center'>
                            Hozir Кoʻrish
                        </button>
                    </Link>
                </div>
            </div>
        </ div>
    )
}

export default about