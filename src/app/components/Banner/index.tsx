'use client'

import React from 'react'
import styles from "./banner.module.css"
import Carousel from 'react-elastic-carousel'
import useWindowSize from "@rooks/use-window-size"

const dataImage = [
  {
    id: 1,
    image: '/banner/1.jpg',
  },
  {
    id: 2,
    image: '/banner/2.jpg',
  },
  {
    id: 3,
    image: '/banner/3.jpg',
  },
  {
    id: 1,
    image: '/banner/4.jpg',
  },
]

const BannerItem = ({ url }: { url: string }) => {
  return (
    <div className={styles.card}>
      <img draggable="false" src={url} />
    </div>
  )
}

const Banner = () => {

  const [itemsToShow, setItemsToShow] = React.useState(3)

  const { innerWidth } = useWindowSize()

  React.useEffect(() => {
    if (innerWidth && innerWidth < 576) {
      setItemsToShow(1)
    } else if (innerWidth && innerWidth < 768) {
      setItemsToShow(1)
    } else if (innerWidth && innerWidth < 992) {
      setItemsToShow(2)
    } else {
      setItemsToShow(3)
    }
  }, [])

  return (
    <div className={styles.container}>
      {/* @ts-ignore  */}
      <Carousel itemsToShow={itemsToShow} easing="cubic-bezier(1,.15,.55,1.54)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        itemPadding={[5, 20]}
        transitionMs={700} showArrows={false} enableAutoPlay autoPlaySpeed={4000}>
        {
          dataImage.map((item, index) => {
            return (
              <BannerItem key={index} url={item.image} />
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default Banner
