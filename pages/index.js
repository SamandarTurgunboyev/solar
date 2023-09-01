import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { About, Offers, Statistics, Warranty, Hero, Production } from '@/components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <div>
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
