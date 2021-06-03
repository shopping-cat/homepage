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
            <meta property="og:type" content="website" />
            <meta property="og:title" content="쇼핑냥이" />
            <meta property="og:image" content="https://shoppingcat.kr/iPhoneMockup.png" />
            <meta property="og:description" content="오직 집사만을 위한 쇼핑몰 쇼핑냥이 입니다" />
            <meta property="og:site_name" content="쇼핑냥이" />
            <meta property="og:locale" content="ko_KR" />
        </Head>
        <div className={styles.container} >
            <div className={styles.infoContainer} >
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
            <div className={styles.bottom} >
                <div>
                    <h3>문의</h3>
                    <a target='_blank' href="https://www.notion.so/73fcfb96cc914f6f82f254c119a034a3" >입점 안내</a>
                    <a target='_blank' href="mailto:alkatel@naver.com">이메일</a>
                    <a target='_blank' href="http://pf.kakao.com/_ILHqs/chat" >카카오톡</a>
                    <a target='_blank' href="mailto:alkatel@naver.com">광고 / 제휴</a>
                    <a target='_blank' href="https://www.notion.so/e50479aa12274e3c9001ff46947aa5bf">팀원 모집</a>
                </div>
                <div>
                    <h3>딥스펀지 주식회사</h3>
                    <span>대표자 홍성욱 | 사업자 등록번호 286-86-01500</span>
                    <span>대표자번호 010-6613-0703</span>
                    <span>사업장주소 서울특별시 강남구 테헤란로44길 8, 6층 57-2호</span>
                    <span>통신판매업</span>
                    <span>
                        <a target='_blank' href="https://shoppingcat.kr/privacy">개인정보 처리방침</a>
                        <span style={{ color: GRAY }} > | </span>
                        <a target='_blank' href="https://shoppingcat.kr/agreement">서비스 이용약관</a>
                        <span style={{ color: GRAY }} > | </span>
                        <a target='_blank' href="https://shoppingcat.kr/orderCancelInfo">주문/교환/환불 안내</a>
                    </span>
                    <span>@ 2021 DeepSponge All rights reserved</span>
                </div>
            </div>
        </div>
    </>
}


export default Home