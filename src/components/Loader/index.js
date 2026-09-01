import React from "react";

const Loader = () => {
  return (
    <div
      className="flex items-center justify-center h-full min-h-[200px]"
      role="status"
      aria-label="Loading"
    >
      <div className="w-12 h-12 border-4 border-[#0c7fb0]/20 border-t-[#0c7fb0] rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
