import React from 'react'
import { APPSTORE_URL, PLAYSTORE_URL } from '../constants/value'
import styles from '../styles/Home.module.css'
import { IoLogoGooglePlaystore, IoLogoApple } from 'react-icons/io5';
import { GRAY } from '../constants/styles';
import Head from 'next/head';


const Home = () => {
    return <>
        <Head>
            <meta property='description' content='오직 집사만을 위한 쇼핑몰 쇼핑냥이 입니다' />
        </Head>
        <div className={styles.container} >

            <img
                src='/iPhoneMockup.png'
                alt='mockup'
                className={styles.backgroundImage}
            />
            <div className={styles.right} >
                <h1 className={styles.title}>쇼핑냥이</h1>
                <h2 className={styles.subTitle}>오직 집사만을 위한 쇼핑몰</h2>
            </div>
            <div className={styles.left} >

                <a href={APPSTORE_URL} ><div className={styles.downloadBtn} >
                    <IoLogoApple size={24} fill={GRAY} />
                    <div className={styles.downloadText} >App Store</div>
                </div></a>
                <a href={PLAYSTORE_URL} ><div className={styles.downloadBtn} >
                    <IoLogoGooglePlaystore size={24} fill={GRAY} />
                    <div className={styles.downloadText} >Google Play</div>
                </div></a>
            </div>
        </div>
    </>
}


export default Home