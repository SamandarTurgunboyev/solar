import Head from 'next/head'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { PrHero, PrProducts } from '@/components'

const Products = () => {
    const { t } = useTranslation('common')
    return (
        <div>
            <Head>
                <title>{t('forIndividuals.pageTitle')}</title>
            </Head>
            <PrHero />
            <PrProducts />
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

export default Products