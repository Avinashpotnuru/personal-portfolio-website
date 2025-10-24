import { memo } from "react";

const ContactCard = ({ data }) => {
  return (
    <div className="bg-[#e1e1e1] shadow-md flex flex-col justify-center items-center border border-blue-300 ">
      <h1 className="text-2xl font-semibold text-center">{data?.title}</h1>
    </div>
  );
};

export default memo(ContactCard);
