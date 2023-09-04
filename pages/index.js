import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { About, Offers, Statistics, Warranty, Hero, Production } from '@/components'
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const { t } = useTranslation("common")
  return (
    <div>
      <Head>
        <title>{t("indexPage")}</title>
      </Head>
      <Hero />
      <Offers />
      <Statistics />
      <Warranty />
      <About />
      <Production />
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

export default Home
