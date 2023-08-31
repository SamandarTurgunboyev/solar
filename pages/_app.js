import { Header } from '@/components'
import '@/styles/globals.css'
import { appWithTranslation } from 'next-i18next'

const App = ({ Component, pageProps }) => {
    return (
        <div>
            <Header />
            <Component {...pageProps} />
        </div>
    )
}
export default appWithTranslation(App)
