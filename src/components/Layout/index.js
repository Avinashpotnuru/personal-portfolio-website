import { store } from "@/src/store/store";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader";
import Header from "../Header";
import Footer from "../Footer";
const DynamicToastContainer = dynamic(
  () => import("react-toastify").then((mod) => mod.ToastContainer),
  { ssr: false },
);

const ContactPopup = dynamic(() => import("../ContactPopup"), {
  ssr: false,
  loading: () => <Loader />,
});
const DetailsPopup = dynamic(() => import("../DetailsPopup"), {
  ssr: false,
  loading: () => <Loader />,
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
          {/* Basic SEO */}
          <title>
            Avinash Potnuru | React.js Developer | Frontend Developer
          </title>

          <meta
            name="description"
            content="Experienced React.js Frontend Developer with 5+ years of experience building scalable, responsive, and high-performance web applications using React.js, Next.js, TypeScript, Redux Toolkit, Tailwind CSS, Material UI, and REST APIs."
          />

          <meta
            name="keywords"
            content="Avinash Potnuru, React Developer, Frontend Developer, React.js, Next.js, TypeScript, JavaScript, Redux Toolkit, Tailwind CSS, Portfolio"
          />

          <meta name="author" content="Avinash Potnuru" />

          <meta
            name="robots"
            content="index, follow, max-image-preview:large"
          />

          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="theme-color" content="#0f172a" />

          {/* Favicon */}
          <link rel="icon" href="/namelogo.png" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />

          <meta
            property="og:title"
            content="Avinash Potnuru | React.js Developer"
          />

          <meta
            property="og:description"
            content="Frontend Developer specializing in React.js, Next.js, TypeScript, Redux Toolkit, Tailwind CSS and modern web technologies."
          />

          <meta property="og:site_name" content="Avinash Portfolio" />
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
