"use client";

import dynamic from "next/dynamic";
import { Provider, useSelector } from "react-redux";
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

const ContactPopupMount = () => {
  const open = useSelector((state) => state.popSlice.contactPopup.status);
  return open ? <ContactPopup /> : null;
};

const DetailsPopupMount = () => {
  const open = useSelector((state) => state.popSlice.detailsPopup.status);
  return open ? <DetailsPopup /> : null;
};

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <ContactPopupMount />
      <DetailsPopupMount />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {children}
    </Provider>
  );
};

export default Providers;