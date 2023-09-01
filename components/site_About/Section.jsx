import Image from 'next/image'
import img from '../../public/images/section.png'
import React from 'react'
import { useTranslation } from 'next-i18next'

const Section = () => {
  const { t } = useTranslation()
  return (
    <section>
      <div className='w-full flex justify-center items-center lg:flex-row flex-col'>
        <div className='lg:w-[50%] w-100% mt-[50px]'>
          <Image src={img} className='w-full' />
        </div>
        <div className='lg:w-[50%] w-[100%] p-[70px]'>
          <span className='font-semibold text-yellow'>{t('site_about.section.title')}</span>
          <h2 className='font-barlowBlack text-4xl text-blue'>{t('site_about.section.title_2')}</h2>
          <p className='mt-[20px] text-[#646464]'>
            {t('site_about.section.text_1')}
          </p>
          <p className='font-barlowSemiBold mt-[20px] text-[#646464]'>
            {t('site_about.section.text_st')}
          </p>
          <p className='mt-[20px] text-[#646464]'>
            {t('site_about.section.text_2')}
          </p>
          <p className='font-barlowSemiBold mt-[20px] text-[#646464]'>
            {t('site_about.section.text_st_2')}
          </p>
          <ul>
            <li className='marker:text-sky-[#646464] list-disc space-y-3 text-slate-400 ml-[30px]'>{t('site_about.section.ul.li_1')}</li>
            <li className='marker:text-sky-[#646464] list-disc space-y-3 text-slate-400 ml-[30px]'>{t('site_about.section.ul.li_2')}</li>
            <li className='marker:text-sky-[#646464] list-disc space-y-3 text-slate-400 ml-[30px]'>{t('site_about.section.ul.li_3')}</li>
            <li className='marker:text-sky-[#646464] list-disc space-y-3 text-slate-400 ml-[30px]'>{t('site_about.section.ul.li_4')}</li>
            <p className='mt-[20px] text-[#646464]'>
            {t('site_about.section.text_3')}
            </p>
            <p className='mt-[20px] text-[#646464]'>{t('site_about.section.text_4')}</p>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Section