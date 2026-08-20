import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 min-h-[60vh] px-5">
      <h1 className="text-6xl font-bold font-roboto-slab text-[#0863bf]">
        404
      </h1>
      <p className="text-lg text-gray-700">This page could not be found.</p>
      <Link href="/" className="button-background-move">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;