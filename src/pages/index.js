import dynamic from "next/dynamic";

const About = dynamic(() => import("../components/About"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const MyProjects = dynamic(() => import("../components/MyProjects"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <div className="mt-24 ">
      <About />
      <MyProjects />
    </div>
  );
}
