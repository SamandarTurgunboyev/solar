import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Offers, Statistics } from '@/components'
import Hero from '@/components/Hero'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <div>
      <Offers />
      <Statistics />
      <Hero />
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
