import React from 'react'
import '../styles/globals.css'
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
    return <>
        <Head>
            <title>쇼핑냥이</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet"></link>
        </Head>
        <Component {...pageProps} />
    </>
}

export default App
