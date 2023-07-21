import CategoryStore from '@/app/store/CategoryStore';
import * as mobx from "mobx";
import { makeAutoObservable } from "mobx";
import { enableStaticRendering } from 'mobx-react-lite';
import { createContext } from "react";
import ProductStore from './PraductInfo';
import VisibleStore from "./VisibleStore";

const isServer = typeof window === 'undefined';
enableStaticRendering(isServer);

import { unstable_batchedUpdates } from "react-dom"; // or react-native
mobx.configure({ reactionScheduler: unstable_batchedUpdates });


export class AppRootStore {

    visiblestore = new VisibleStore()
    categoryStore = new CategoryStore()
    productStore = new ProductStore()

    constructor() {
        makeAutoObservable(this)
    }

}

const rootStore = new AppRootStore();
export default createContext(rootStore);