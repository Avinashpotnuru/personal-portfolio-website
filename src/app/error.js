"use client";

const GlobalError = ({ reset }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 min-h-[60vh] px-5">
      <h2 className="text-2xl font-bold font-roboto-slab text-[#0863bf]">
        Something went wrong
      </h2>
      <p className="text-gray-700">An unexpected error occurred.</p>
      <button type="button" onClick={reset} className="button-background-move">
        Try again
      </button>
    </div>
  );
};

export default GlobalError;