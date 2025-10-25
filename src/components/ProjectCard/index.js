
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ data }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
        x: data.id % 2 === 1 ? -100 : 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      transition={{
        duration: 0.8,
        delay: data.id * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className="relative flex flex-col my-6 transition-shadow duration-300 bg-[#0c7fb0] border rounded-lg shadow-sm cursor-pointer group border-slate-200 hover:shadow-lg"
    >
      <div className="relative m-2.5 overflow-hidden text-white rounded-md">
        <Image
          className="w-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform group-hover:scale-110"
          src={data.imgUrl}
          alt={data?.title}
          width={500}
          height={500}
        />
      </div>

      <div className="px-3 text-black transition-all duration-500 h-1/2 group-hover:text-white font-roboto-slab">
        <h1 className="my-4 text-lg font-extrabold text-center group-hover:text-white">
          {data?.title}
        </h1>
        <p className="text-center group-hover:text-white card__preview-text">
          {data?.description}
        </p>

        <div className="p-5 transition-all duration-500 md:flex md:justify-around md:items-center">
          <div className="text-center">
            <Link href={data?.Link}>
              <button className="text-white btn from-left">Read more</button>
            </Link>
          </div>
          <div className="mt-2 text-center sm:mt-0">
            <Link
              href={data?.deploylink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-white btn from-left">View project</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
