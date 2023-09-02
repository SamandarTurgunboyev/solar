import Certification from '@/components/site_About/Certification'
import Header from '@/components/site_About/Header'
import Section from '@/components/site_About/Section'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Statistics from '@/components/site_About/Statistics'
import Area from '@/components/site_About/Area'
import AreaVideo from '@/components/site_About/AreaVideo'

const About = () => {
  return (
    <div>
      <Header />
      <Section />
      <Certification />
      <Statistics />
      <Area />
      <AreaVideo />
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