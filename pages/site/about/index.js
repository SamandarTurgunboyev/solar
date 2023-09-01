import Header from '@/components/site_About/Header'
import Section from '@/components/site_About/Section'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const About = () => {
  return (
    <div>
      <Header />
      <Section />
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

export default About