import { memo, useCallback } from "react";

const TabButtonComponent = ({ label, index, activeTab, onClick }) => {
  const isActive = activeTab === index;
  const buttonClasses = `py-2 px-4 text-sm font-roboto-slab ${
    isActive ? "border-[#0c7fb0] border-b-2 font-medium pb-3" : "text-black"
  }`;

  const handleClick = useCallback(() => onClick(index), [onClick, index]);

  return (
    <button
      type="button"
      className={buttonClasses}
      role="tab"
      aria-selected={isActive}
      tabIndex={isActive ? 0 : -1}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};



export default memo(TabButtonComponent);
