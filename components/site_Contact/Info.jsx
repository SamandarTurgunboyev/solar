import React from 'react'
import { useTranslation } from 'next-i18next'

const Info = () => {
  const { t } = useTranslation()
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-[40px] gap-[50px]'>
      <div>
        <h4 className='text-blue font-barlowBlack text-2xl'>{t('site_contact.info.series_1.title')}</h4>
        <hr className='mt-[10px]' />
        <ul className='flex gap-[5px] flex-col pt-[20px] text-[#646464]'>
          <li className='flex justify-between'>
            <p className='font-barlowSemiBold'>{t('site_contact.info.phone')}:</p>
            <p>+998 955020007</p>
          </li>
          <li className='flex justify-between'>
            <p className='font-barlowSemiBold'>{t('site_contact.info.mail')}:</p>
            <p>info@solara.uz</p>
          </li>
        </ul>
      </div>
      <div>
        <h4 className='text-blue font-barlowBlack text-2xl'>{t('site_contact.info.series_2.title')}</h4>
        <hr className='mt-[10px]' />
        <ul className='flex gap-[5px] flex-col pt-[20px] text-[#646464]'>
          <li className='flex justify-between'>
            <p className='font-barlowSemiBold'>{t('site_contact.info.phone')}:</p>
            <p>+998 955020007</p>
          </li>
          <li className='flex justify-between'>
            <p className='font-barlowSemiBold'>{t('site_contact.info.mail')}:</p>
            <p>info@solara.uz</p>
          </li>
        </ul>
      </div>
      <div>
        <h4 className='text-blue font-barlowBlack text-2xl'>{t('site_contact.info.series_3.title')}</h4>
        <hr className='mt-[10px]' />
        <ul className='flex gap-[5px] flex-col pt-[20px] text-[#646464]'>
          <li className='flex justify-between'>
            <p className='font-barlowSemiBold'>{t('site_contact.info.phone')}</p>
            <p>+998 955020007</p>
          </li>
          <li className='flex justify-between'>
            <p className='font-barlowSemiBold'>{t('site_contact.info.mail')}:</p>
            <p>info@solara.uz</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Info