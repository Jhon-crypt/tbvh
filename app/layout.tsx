import './globals.css'
import Header from './components/header/header'
//import Footer from './components/footer/footer'
import Head from "next/head"

export const metadata = {
  title: 'TBVH | To Be Very Honest',
  description: 'TBVH is a public anonymous chatting site that lets you find out the truth on people thoughts about you and other stuffs going on',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="mytheme">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>

        <meta property="og:image" content="https://res.cloudinary.com/db7wwc9ex/image/upload/v1688241772/tbvh/facebook-open-graph-image/Face_husks8.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:title" content="To Be Very Honest" />
        <meta property="og:description" content="TBVH is a public anonymous chatting site that lets you find out the truth on people thoughts about you and other stuffs going on" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TBVH" />

        <meta name="twitter:image" content="https://res.cloudinary.com/db7wwc9ex/image/upload/v1688241824/tbvh/twitter-open-graph-image/Twitter_d9rjea.png" />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="675" />
        <meta name="twitter:card" content="https://res.cloudinary.com/db7wwc9ex/image/upload/v1688244215/tbvh/twitter-open-graph-image/IMG_20230701_214108__280_x_150_pixel_zgtfom.png" />
        <meta name="twitter:title" content="TBVH | To Be Very Honest" />
        <meta name="twitter:description" content="TBVH is a public anonymous chatting site that lets you find out the truth on people thoughts about you and other stuffs going on" />

      </Head>
      <body className="bg-white min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  )
}
