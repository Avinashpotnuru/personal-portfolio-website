"use client";

import { createPortal } from "react-dom";
import { useEffect, useRef, useCallback } from "react";

const Modal = ({ isOpen, close, children, parentClasses }) => {
  const firstFocusableRef = useRef(null);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape" && close) {
        close();
      }
    },
    [close],
  );

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    const previousActive = document.activeElement;
    const node = firstFocusableRef.current;
    if (node) node.focus();

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
      if (previousActive && previousActive.focus) previousActive.focus();
    };
  }, [isOpen, handleKeyDown]);

  if (typeof window !== "object") return null;

  if (isOpen) {
    return createPortal(
      <div
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 bottom-0 left-0 right-0 w-screen h-screen z-40 bg-[#061820]/60 backdrop-blur-sm ${parentClasses}`}
        onClick={close ? close : null}
      >
        <div
          ref={firstFocusableRef}
          tabIndex={-1}
          className="outline-none w-full h-full flex justify-center items-center"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>,
      document.getElementById("modal")
    );
  } else {
    return null;
  }
};

export default Modal;
