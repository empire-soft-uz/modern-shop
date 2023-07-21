'use client'

import { ToastContainer } from "react-toastify";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Header from "./components/Header";
import ProductInfo from "./components/ProductInfo/productInfo";
import ProductList from "./components/ProductList";
import 'react-toastify/dist/ReactToastify.css';
import Script from "next/script";
import { observer } from "mobx-react-lite";

function Home() {
  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <div>
        <Header />
        <div style={{ marginTop: "10vh" }}>
          <Banner />
          {/* <Category /> */}
          <ProductList />
          <ProductInfo />
        </div>
      </div>
      <Script
        id="yandexx"
        src='./script.js'
        strategy="lazyOnload"
      />
    </>
  )
}

export default observer(Home)