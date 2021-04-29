import React from 'react'
import styles from '../styles/Home.module.css'

const Home = () => {

    if (typeof window === 'undefined') return null

    return (
        <div>
            {/* <div>
                <h1 className={styles.title}>쇼핑냥이</h1>
                <h1 className={styles.title}>오직 집사만을 위한 쇼핑몰</h1>
            </div>
             */}
            <div>김태훈 안녕 ㅋ</div>
            <iframe src='https://novelpia.com/' width={window.outerWidth} height={window.outerHeight} />
        </div>
    )
}


export default Home