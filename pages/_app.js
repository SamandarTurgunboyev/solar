import { Footer, Header, Navbar } from '@/components'
import { appWithTranslation } from 'next-i18next'
import '@/styles/globals.css'

const App = ({ Component, pageProps }) => {
    return (
        <div>
            <Header />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </div>
    )
}
export default appWithTranslation(App)
