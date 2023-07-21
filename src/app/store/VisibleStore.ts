
import { makeAutoObservable } from 'mobx';

type modal = {
    productInfo: boolean
}

export default class VisibleStore {

    constructor() {
        makeAutoObservable(this)
    }

    visiable: modal = {
        productInfo: false
    }

    show = (key: keyof modal) => {
        this.visiable[key] = true
    }

    hide = (key: keyof modal) => {
        this.visiable[key] = false
    }

    toggle = (key: keyof modal) => {
        this.visiable[key] = !this.visiable[key]
    }

}

// const visibleStore = new VisibleStore();
// export default visibleStore