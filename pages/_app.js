import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux';
import { store } from './../app/store';
import './i18n';
import Footer from '../components/Footer';
import Header from '../components/Header';


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>

        <Header/>
          <Component {...pageProps} />

          <Footer/>
      </Provider>
    </SessionProvider>
  )
}