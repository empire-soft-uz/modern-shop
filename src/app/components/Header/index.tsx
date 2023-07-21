import { COLORS } from '@/constants/color'

import React from 'react'
import styles from "./style.module.css"

const Header = () => {
    return (
        <div
            className={styles.container}
            style={{ backgroundColor: COLORS.black }}
        >
            <div className={styles.content}>
                {/* <h1>My-Day</h1> */}
                <a className={styles.logo_box} href="#">
                    <img src='/logo.png' alt="" />
                </a>
                <a className={styles.number_btn} href="tel:+998 (93) 230 05 00">+998 (93) 230 05 00</a>
            </div>
        </div>
    )
}

export default Header
