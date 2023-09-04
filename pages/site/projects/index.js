import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { PjHero, PjProjects } from '@/components'

const Projects = () => {
  const { t } = useTranslation('common')
  return (
    <div>
      <Head>
        <title>{t("projects.pageTitle")}</title>
      </Head>
      <PjHero />
      <PjProjects />
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

export default Projects