import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Offers } from '@/components'

const Home = () => {
  const { t } = useTranslation('common')
  return (
    <div>
      <p>{t("hello")}</p>
      <Offers />
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default Home
