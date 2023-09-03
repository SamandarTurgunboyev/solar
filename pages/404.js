import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import Link from 'next/link'

const Custom404 = () => {
    const { t } = useTranslation("common")
    return (
        <div className='py-8 flex items-center flex-col gap-4'>
            <Head>{t("custom404.pageTitle")}</Head>
            <h1 className='md:text-[300px] text-[120px] text-yellow font-barlowBlack'>404</h1>
            <p className='md:text-[30px] text-[22px] text-blue font-barlowSemiBold text-center'>{t("custom404.title")}</p>
            <p className='md:text-[19px] text-[16px] text-blue'>{t("custom404.info")}</p>
            <Link href={"/"}><button className='button-hover bg-blue before:!bg-yellow text-white'>{t("custom404.back")}</button></Link>
        </div>
    )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    }
}

export default Custom404