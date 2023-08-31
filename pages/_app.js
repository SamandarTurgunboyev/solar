import { Footer, Header } from '@/components'
import '@/styles/globals.css'
import { appWithTranslation } from 'next-i18next'

const App = ({ Component, pageProps }) => {
    return (
        <div>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </div>
    )
}
export default appWithTranslation(App)
