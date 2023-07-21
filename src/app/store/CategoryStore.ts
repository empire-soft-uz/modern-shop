import { makeAutoObservable, runInAction } from "mobx";
import { ProductData } from "../components/ProductList/productData";
import { productType } from "./PraductInfo";

type Category = {
    id: number,
    name: string,
    key: string
}

export default class CategoryStore {

    constructor() {
        makeAutoObservable(this)
    }

    Products: productType[] = ProductData;

    setCategories = (categorie: Category) => {
        if (categorie.key === '') {
            runInAction(() => {
                this.Products = ProductData;
            })
        } else {
            runInAction(() => {
                this.Products = ProductData.filter((item) => item.category === categorie.key);
                console.log(this.Products);
            })
        }
    }
}

// const categoryStore = new CategoryStore();
// export default categoryStore;