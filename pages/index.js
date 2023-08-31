import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home = () => {
  return (
    <main>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi fugiat, repudiandae veritatis harum numquam illo corrupti doloribus repellat. Perspiciatis, tempora earum consectetur eaque obcaecati soluta molestias quod impedit. Aut.</main>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'footer',
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default Home
