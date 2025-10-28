import { store } from "@/src/store/store";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import { Provider } from "react-redux";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader";
const DynamicToastContainer = dynamic(
  () => import("react-toastify").then((mod) => mod.ToastContainer), // import only ToastContainer
  { ssr: false } // disable SSR, because ToastContainer is client-only
);

const Header = dynamic(() => import("../Header"), {
  ssr: false,
  loading: () => <Loader />,
});
const Footer = dynamic(() => import("../Footer"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});
const ContactPopup = dynamic(() => import("../ContactPopup"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});
const DetailsPopup = dynamic(() => import("../DetailsPopup"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const toastConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
};
const Layout = ({ children }) => {
  return (
    <div className="h-screen overflow-y-auto font-roboto">
      <React.Fragment>
        <Head>
          <title>Avinash - React Developer </title>
          <link
            rel="icon"
            href="/namelogo.png"
            type="image/x-icon"
            sizes="any"
          />
          <meta
            name="description"
            content="Avinash is a software developer from Andhra Pradesh with expertise in web development using  React"
          />
        </Head>
      </React.Fragment>
      <Provider store={store}>
        <ContactPopup />
        <DetailsPopup />
        <DynamicToastContainer {...toastConfig} />

        <Header />
        <main>{children}</main>
        <div className="self-end">
          <Footer />
        </div>
      </Provider>
    </div>
  );
};

export default Layout;
