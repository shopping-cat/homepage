import React from 'react'
import '../styles/globals.css'
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
    return <>
        <Head>
            <title>쇼핑냥이</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
    </>
}

export default App
