import useRootStore from '@/app/hook/useRootStore'
import { observer } from 'mobx-react-lite'
import React from 'react'
import styles from "./category.module.css"

export const CategoryData = [
    {
        id: 1,
        name: "Barchasi",
        key: ''
    },
    {
        id: 2,
        name: "Ajoyib sovg'alar",
        key: 'unusual'
    },
    {
        id: 4,
        name: "Bayram sovg'alari",
        key: 'holidays'
    },
    {
        id: 5,
        name: "Shirin sovg'alar",
        key: 'beautiful'
    },
    {
        id: 3,
        name: "Gullar",
        key: 'flowers'
    },
]

const Category = () => {

    const [active, setActive] = React.useState(1)
    const { setCategories } = useRootStore().categoryStore

    const onClick = (item: any) => {
        setCategories(item)
        setActive(item.id)
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {
                    CategoryData.map((item) => {
                        return (
                            <button
                                className={`${styles.box}`}
                                style={item.id === active ? {
                                    backgroundColor: "#000",
                                    color: "#fff"
                                } : {}}
                                key={item.id}
                                onClick={() => onClick(item)}
                            >
                                {item.name}
                            </button>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default observer(Category)
