import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { store } from '../src/app/store'
import { Provider } from 'react-redux'
 
function MyApp({ Component, pageProps:{session,...pageProps} }) {
  
    return(

      <SessionProvider session={session} refetchInterval={5 * 60}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    )
}

export default MyApp
