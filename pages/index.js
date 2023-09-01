import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Offers, Statistics } from '@/components'

const Home = () => {
  return (
    <div>
      <Offers />
      <Statistics />
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
