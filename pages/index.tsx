import React from 'react'
import { APPSTORE_URL, PLAYSTORE_URL } from '../constants/value'
import styles from '../styles/Home.module.css'

const Home = () => {
    return (
        <div className={styles.container} >
            <img src='icon.png' width={'10%'} />

            <div className={styles.title}>쇼핑냥이</div>
            <div className={styles.subTitle}>오직 집사만을 위한 쇼핑몰</div>

            <a href={APPSTORE_URL} ><div className={styles.downloadBtn} >iPhone 다운</div></a>
            <a href={PLAYSTORE_URL} ><div className={styles.downloadBtn}>Android 다운</div></a>
        </div>
    )
}


export default Home