'use client'

import useRootStore from '@/app/hook/useRootStore';
import { ImagesType, productType } from '@/app/store/PraductInfo';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import styles from "./carusel.module.css";

const Carusel = () => {

    const { oneProduct } = useRootStore().productStore

    const [active, setActive] = useState<ImagesType>(oneProduct.images[0])

    return (
        <div className={styles.container}>
            {oneProduct.images.map((e, index) => {
                return (
                    <div style={{ height: oneProduct.images.length > 1 ? "75%" : "100%" }} key={index} className={`${styles.slideContainer} ${e.id === active.id ? styles.slideContainerActive : ""}`}>
                        <div className={styles.largeImage}>
                            {active.vidio ?
                                <video className={styles.image} controls>
                                    <source src={`${e.vidio}`} type="video/mp4" />
                                    <source src={`${e.vidio}`} type="video/ogg" />
                                </video> :
                                <img className={styles.image} src={active.image}></img>
                            }
                        </div>
                    </div>
                )
            })}
            {
                oneProduct.images.length > 1 ?
                    <div className={styles.itemBox}>
                        {oneProduct?.images.map((e: any, index: number) => {
                            return (
                                <div className={styles.item} style={{ border: active?.id === e.id ? "3px solid #3075C6" : "3px solid transparent" }} key={index} onClick={() => setActive(e)}>
                                    <img src={e.image} alt="" />
                                </div>
                            )
                        })}
                    </div> :
                    null
            }
        </div>
    )
}

export default observer(Carusel)
