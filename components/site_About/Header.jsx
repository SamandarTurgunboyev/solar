import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'next-i18next'

const Header = () => {
    const { t } = useTranslation()
    return (
        <div className="bg-[url('/images/site_about_bg.jpg')] bg-cover w-full h-[300px] relative">
            <div className='w-full absolute mt-[80px]'>
                <div className='relative text-center'>
                    <h2 className='text-5xl text-blue font-barlowBlack'>
                        {t('site_about.header.title')}
                    </h2>
                    <ul className='list-none flex justify-center gap-[20px] mt-[20px]'>
                        <Link href='/'>
                            <li className='text-white site_ab cursor-pointer relative font-barlowBold hover:text-yellow'>
                                {t('site_about.header.ul.link')}
                            </li>
                        </Link>
                        <li className='text-blue font-barlowBold'>
                            {t('site_about.header.ul.li')}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header