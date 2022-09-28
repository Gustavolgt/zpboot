import '../styles/globals.css'
import '../styles/css/animate.min.css'
import '../styles/css/bootstrap.min.css'
//import '../styles/css/fontawesome-all.min.css'
import '../styles/css/responsive.css'
import '../styles/css/style.css'
import '../styles/css/zimed-icon.css'
import { ChakraProvider } from '@chakra-ui/react'
import Script from 'next/script'
function MyApp({ Component, pageProps }) {
  let GTM_ID = 'GTM-M8NN8M8'

  return (
    <>
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `
        }}
      />
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
