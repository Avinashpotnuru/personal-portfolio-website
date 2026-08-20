"use client";

import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import { store } from "@/src/store/store";
import Loader from "@/src/components/Loader";

const ToastContainer = dynamic(
  () => import("react-toastify").then((mod) => mod.ToastContainer),
  { ssr: false }
);

const ContactPopup = dynamic(() => import("@/src/components/ContactPopup"), {
  ssr: false,
  loading: () => <Loader />,
});

const DetailsPopup = dynamic(() => import("@/src/components/DetailsPopup"), {
  ssr: false,
  loading: () => <Loader />,
});

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <ContactPopup />
      <DetailsPopup />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {children}
    </Provider>
  );
};

export default Providers;