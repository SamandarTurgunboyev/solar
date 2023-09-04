import Modal from '@/components/site_Contact/Modal'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import React from 'react'
import { useTranslation } from 'next-i18next'
import Office from '@/components/site_Contact/Office'
import Info from '@/components/site_Contact/Info'

const index = () => {
    const { t } = useTranslation()
    return (
        <div>
            <Head>
                <title>{t('site_contact.pageTitle')}</title>
            </Head>
            <Modal />
            <Office />
            <Info />
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

export default index