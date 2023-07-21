'use client'

import useRootStore from '@/app/hook/useRootStore';
import { Notifocation } from '@/app/store/Notification';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import Modal from 'react-modal';
import Carusel from '../Carusel/carusel';
import styles from "./productInfo.module.css";
import { useSearchParams } from 'next/navigation'


const ProductInfo = () => {

  const { hide, visiable, show } = useRootStore().visiblestore
  const { oneProduct, form, setForm, clearForm, setProduct } = useRootStore().productStore
  const { Products } = useRootStore().categoryStore
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const id = searchParams.get('product') as unknown as number
    if (id) {
      const item = Products.find(e => e.id == id)
      if (item) {
        setProduct(item)
        show("productInfo")
      }
    }
  }, [])

  const data = `Modern-shop order:%0A name: ${form.name}%0A price: ${form.price}%0A amount: ${form.amount}%0A tel: ${form.tel}%0A time: ${new Date()}%0A image: https://my-day.uz/${form.image}`

  const sendBot = async () => {
    if (form.tel.length < 18) {
      Notifocation.error('Telefon raqamni to`liq kiriting')
      return
    }
    setLoading(true)
    await axios({
      method: 'post',
      url: `https://api.telegram.org/bot6319966384:AAEgh1fX2k3fNmyi4HkA5hz-2ZhiH1yBPuQ/sendMessage?chat_id=-660662619&text=${data}`,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      Notifocation.success('Sizning buyurtmangiz qabul qilindi, tez fursatda siz bilan bog`lanamiz')
      hide("productInfo")
      clearForm()
    }).catch(err => {
      Notifocation.error('Xatolik yuz berdi')
    })
    setLoading(false)
  }

  const closeProductInfo = () => {
    hide("productInfo")
    router.push('/')
  }

  return (
    <Modal
      isOpen={visiable.productInfo}
      onRequestClose={closeProductInfo}
      className={styles.modal}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000
        }
      }}
    >
      <div className={styles.container}>
        <div className={styles.closeBtn} onClick={closeProductInfo}>
          <img src="/x.svg" alt="" />
        </div>
        <div className={styles.leftBox}>
          <Carusel />
        </div>
        <div className={styles.rightBox}>
          <div className={styles.tetxsbox}>
            <h3 className={styles.name}>{oneProduct?.name}</h3>
            <p className={styles.leght}>{oneProduct?.criterion}</p>
            <p className={styles.info}>
              {
                oneProduct?.description
              }
            </p>
            <h2 className={styles.price}>{`${oneProduct?.price} ${oneProduct?.cost ? "so'm" : ''} `}<span className={styles.sprice}>{oneProduct?.discountPrice == 0 ? '' : oneProduct?.discountPrice}</span></h2>
          </div>
          <div className={styles.btnBox}>
            <button onClick={() => setForm(form?.amount - 1, 'amount')}>-</button>
            <h4 className={styles.size}>{form.amount}</h4>
            <button onClick={() => setForm(form?.amount + 1, 'amount')}>+</button>
          </div>
          <div className={styles.bottom}>
            <InputMask
              className={styles.numberInput}
              mask="+ \9\98 99 999 99 99"
              maskChar=" "
              alwaysShowMask={true}
              value={form.tel}
              onChange={(e) => setForm(e.target.value, 'tel')}
            />
            <button
              className={styles.buyBtn}
              onClick={sendBot}
            >
              {
                loading ? <img src='./Loader.svg' className={styles.spinner} /> : 'Buy'
              }
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default observer(ProductInfo)