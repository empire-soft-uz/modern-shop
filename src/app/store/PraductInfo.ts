import { makeAutoObservable, runInAction, toJS } from "mobx";

type formType = {
    id: number;
    name: string;
    price: string;
    amount: number;
    tel: string;
    time: Date;
    image?: string;
};
export type ImagesType = {
    id: number,
    image: string,
    vidio: string,
};

export type productType = {
    id: number;
    name: string;
    price: string;
    category?: string;
    criterion: string;
    description: string;
    discountPrice: number;
    cost: string;
    images: ImagesType[];
}

export default class ProductStore {

    constructor() {
        makeAutoObservable(this)
    }

    form: formType = {
        id: 0,
        name: '',
        price: '',
        amount: 1,
        tel: '',
        time: new Date(),
        image: ''
    }

    validationForm: boolean = false;
    validationFormText: string = '';

    oneProduct: productType = {
        id: 1,
        name: '',
        price: '',
        criterion: '',
        description: '',
        discountPrice: 0,
        images: [{
            id: 1,
            image: "",
            vidio: "",
        }],
        cost: ""
    }

    setProduct = (product: productType) => {
        this.oneProduct = product;
        this.clearForm();
        this.form = {
            id: product?.id,
            image: product?.images[0].image,
            name: product?.name,
            price: product?.price,
            amount: 1,
            tel: '',
            time: new Date(),
        }
    }

    setForm = (value: string | number, key: keyof formType) => {
        if (key === 'amount') {
            if (value < 1) {
                value = 1;
            }
        }
        this.form[key] = value as never;
    }

    clearForm = () => {
        this.form = {
            id: 0,
            name: '',
            price: '',
            amount: 1,
            tel: '',
            time: new Date(),
        }
    }

    validation = () => {
        if (this.form.name === '') {
            runInAction(() => {
                this.validationForm = true;
            })
        }
        if (this.form.price === '') {
            runInAction(() => {
                this.validationForm = true;
            })
        }
        if (this.form.tel === '') {
            runInAction(() => {
                this.validationForm = true;
                this.validationFormText = 'Iltimos telefon raqamingizni kiriting'
            })
        } else {
            runInAction(() => {
                this.validationForm = false;
            })
        }
    }
}

// const productStore = new ProductStore()
// export default productStore