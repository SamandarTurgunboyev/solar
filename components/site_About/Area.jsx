import React from 'react'
import Image from 'next/image'
import img from '../../public/images/area-img2.jpg'
import img2 from '../../public/images/area-img.jpg'
import { useTranslation } from 'next-i18next'

const Area = () => {
    const { t } = useTranslation()
    return (
        <div className='w-full flex lg:flex-row flex-col justify-center items-center lg:h-[500px] h-auto'>
            <div className='w-full p-[70px]'>
                <span className='mt-[5px] font-barlowSemiBold text-yellow'>{t("site_about.Area.title_span")}</span>
                <h2 className='mt-[30px] font-barlowBlack text-blue text-4xl'>{t("site_about.Area.title")}</h2>
                <p className='text-[#646464] mt-[30px]'>{t("site_about.Area.text")}</p>
            </div>
            <div className='lg:w-[100%] w-[80%] flex sm:flex-row flex-col gap-[20px]'>
                <Image src={img} className='sm:w-[50%] w-[100%]' />
                <Image src={img2} className='sm:w-[50%] w-[100%]' />
            </div>
        </div>
    )
}

export default Area