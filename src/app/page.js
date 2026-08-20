import About from "@/src/components/About";
import MyProjects from "@/src/components/MyProjects";

export const metadata = {
  title: "Avinash Potnuru | React.js Developer | Frontend Developer",
  description:
    "Frontend Developer with 5+ years of experience building fast, responsive, and user-focused web applications using React.js, Next.js, TypeScript, Redux Toolkit, Tailwind CSS, Material UI, and REST APIs.",
};

export default function Home() {
  return (
    <div className="">
      <About />
      <MyProjects />
    </div>
  );
}