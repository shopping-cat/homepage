import React from 'react'
import styles from '../styles/orderCancelInfo.module.css'

const orderCancelInfo = () => {
    return (
        <div className={styles.container} >
            <h3 className={styles.title} >주문 취소</h3>
            <ul className={styles.content} >
                <li>결제 후 30분동안 결제상태가 '구매접수'로 유지가 됩니다. 이때는 전체 취소가 가능하고 이후에는 직접 취소 하실 수 없습니다.</li>
                <li>결제상태가 '구매접수'일때는 [마이페이지 &gt; 주문내역 &gt; 주문상세]에서 직접 처리가 가능합니다</li>
                <li>상품상태가 '배송중' 이상의 상태가 아닐시에는 직접 해당 상점에 연락하여 부분 취소를 요청해 볼 수 있으나 상황에 따라 주문 취소가 불가능 할 수도 있습니다.</li>
                <li>상품상태가 '배송중' 이상의 상태라면 교환/환불만 가능합니다.</li>
            </ul>

            <h3 className={styles.title} >교환/환불</h3>
            <ul className={styles.content} >
                <li>교환/환불은 배송완료된 날로부터 7일 이내에 가능합니다.</li>
                <li>냉장/냉동 상품은 운송의 특성 상 배송완료된 날로부터 2일 이내, 상품 상태를 확인할 수 있는 사진을 첨부해 해당 상품을 구매하신 상점에 문의 부탁 드립니다.</li>
                <li>환불은 상품 환불 절차가 모두 끝난 후 상품 상태를 확인한 후에 이상이 없는 경우에 진행됩니다.</li>
                <li>교환은 기존 구매한 상품을 수거하고 상품 이상 유무를 확인한 뒤 교환 받으실 상품을 발송해 드립니다.</li>
                <li>쇼핑냥이는 중개업자이기 때문에 상품별 자세한 교환/환불 내용은 [마이페이지 &gt; 주문내역 &gt; 주문상세 &gt; 교환/환불하기]에서 확인 가능합니다.</li>
            </ul>

            <h3 className={styles.title} >교환/환불이 불가능한 경우</h3>
            <ul className={styles.content} >
                <li>고객님의 부주의로 상품이 파손되거나 분실한 경우</li>
                <li>상품을 설치하거나 일부 소비, 사용한 경우</li>
                <li>시간이 지나 다시 판매하기 곤란할 정도로 상품 가치가 떨어진 경우</li>
                <li>냉장/냉동 상품의 경우 상품 특성 상 단순 변심, 주문 착오의 사유로 교환/환불이 어렵습니다.</li>
                <li>포장이 훼손되어 상품 가치가 떨어진 경우</li>
                <li>고객님의 주문에 따라 개별 생산되는 상품으로 재판매가 불가능한 경우</li>
            </ul>

            <h3 className={styles.title} >교환/환불 배송비</h3>
            <ul className={styles.content} >
                <li>일부 상품에서는 특정 상황에서 교환/환불시 배송비가 발생합니다.</li>
                <li>자세한 교환/환불 배송비용은 [마이페이지 &gt; 주문내역 &gt; 주문상세 &gt; 교환/환불하기]에서 확인 하실 수 있습니다.</li>
            </ul>
        </div>
    )
}

export default orderCancelInfo