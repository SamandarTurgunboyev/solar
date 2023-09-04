import React from 'react'
import { useTranslation } from 'next-i18next'
import { CiLocationOn } from 'react-icons/ci'

const Office = () => {
    const { t } = useTranslation()
    return (
        <div className='p-[40px] w-full flex md:flex-row flex-col lg:gap-0 gap-[50px] bg-[#f2f2f2]'>
            <div className='md:w-[50%] w-full'>
                <h3 className='font-barlowBlack text-blue text-2xl flex items-center'>
                    <CiLocationOn />
                    {t('site_contact.office.title')}
                </h3>
                <p className='text-[#646464]'>{t('site_contact.office.addres')}</p>
                <ul className='lg:w-[50%] w-[100%] pt-[30px] text-[#646464] flex flex-col gap-[5px] '>
                    <li className='flex justify-between '>
                        <p className='font-barlowSemiBold'>{t('site_contact.office.phone')}:</p>
                        <p>+998 955020007</p>
                    </li>
                    <li className='flex justify-between'>
                        <p className='font-barlowSemiBold'>{t('site_contact.office.internet')}:</p>
                        <p>+998 955020007</p>
                    </li>
                    <li className='flex justify-between'>
                        <p className='font-barlowSemiBold'>{t('site_contact.office.mail')}:</p>
                        <p>info@solara.uz</p>
                    </li>
                </ul>
            </div>
            <div className='md:w-[50%] w-full'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1522.865699348154!2d69.26812873701381!3d40.2372739902702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b197990b3aec49%3A0x196848a417bb4d8f!2sAsadbek&#39;s%20IELTS!5e0!3m2!1sru!2s!4v1693834867538!5m2!1sru!2s" className='w-[100%] h-[200px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Office