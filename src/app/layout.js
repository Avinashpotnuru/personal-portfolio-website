import { Lexend_Deca, Roboto, Roboto_Slab } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Providers from "@/src/components/providers";
import "@/src/styles/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  display: "swap",
});

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Avinash Potnuru | React.js Developer | Frontend Developer",
    template: "%s | Avinash Potnuru",
  },
  description:
    "Experienced React.js Frontend Developer with 5+ years of experience building scalable, responsive, and high-performance web applications using React.js, Next.js, TypeScript, Redux Toolkit, Tailwind CSS, Material UI, and REST APIs.",
  keywords: [
    "Avinash Potnuru",
    "React Developer",
    "Frontend Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Redux Toolkit",
    "Tailwind CSS",
    "Portfolio",
  ],
  authors: [{ name: "Avinash Potnuru" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/namelogo.png",
  },
  openGraph: {
    type: "website",
    title: "Avinash Potnuru | React.js Developer",
    description:
      "Frontend Developer specializing in React.js, Next.js, TypeScript, Redux Toolkit, Tailwind CSS and modern web technologies.",
    siteName: "Avinash Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Avinash Potnuru | React.js Developer",
    description:
      "Frontend Developer specializing in React.js, Next.js, TypeScript, Redux Toolkit, Tailwind CSS and modern web technologies.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoSlab.variable} ${lexendDeca.variable}`}
    >
      <body>
        <div className="h-screen overflow-y-auto font-roboto">
          <Providers>
            <Header />
            <main>{children}</main>
            <div className="self-end">
              <Footer />
            </div>
          </Providers>
        </div>
        <div id="modal" />
      </body>
    </html>
  );
}