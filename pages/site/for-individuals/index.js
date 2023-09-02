import React from 'react'
import Head from 'next/head'
import { InFeatures, InHelp, InHero, InReasons } from '@/components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const Individuals = () => {
  const { t } = useTranslation('common')
  return (
    <div>
      <Head>
        <title>{t('forIndividuals.pageTitle')}</title>
      </Head>
      <InHero />
      <InReasons />
      <InHelp />
      <InFeatures />
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

export default Individuals