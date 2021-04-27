import React, { useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import { APPSTORE_URL, APP_SCHEME, PLAYSTORE_URL } from '../../constants/value'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { COLOR1 } from '../../constants/styles';
import styles from '../../styles/item.[id].module.css'


const itemDetail = () => {

    const { query } = useRouter()

    const deepLinking = useCallback(() => {
        const itemId = query.id
        if (!query.id) return
        const isAndroid = !!navigator.userAgent.match(/Android/i)
        const isIos = !!navigator.userAgent.match(/iPhone|iPad|iPod/i)
        if (!isAndroid && !isIos) return
        window.location.href = `${APP_SCHEME}item/${itemId}`
        setTimeout(() => {
            if (!document.hidden) {
                if (isAndroid) window.location.href = PLAYSTORE_URL
                if (isIos) window.location.href = APPSTORE_URL
            }
        }, 1000)
    }, [query])

    useEffect(() => {
        deepLinking()
    }, [query])

    return (
        <div className={styles.container} >
            <Loader
                type='Oval'
                color={COLOR1}
                height={50}
                width={50}
            />
        </div>
    )
}

export default itemDetail
