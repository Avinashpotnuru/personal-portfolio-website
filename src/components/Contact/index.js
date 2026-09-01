"use client";

import { memo } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { openContactPopup } from "@/src/store/slices/popup";
import Reveal from "../Reveal";

const contactInfo = [
  { icon: FaUserAlt, type: "Name", label: "Avinash Potnuru" },
  {
    icon: MdCall,
    type: "Phone",
    label: "8919016096",
    href: "tel:8919016096",
  },
  {
    icon: HiOutlineMail,
    type: "Email",
    label: "potnuruavinash111@gmail.com",
    href: "mailto:potnuruavinash111@gmail.com",
  },
];

const socialLinks = [
  { icon: BsGithub, href: "https://github.com/Avinashpotnuru", label: "GitHub" },
  { icon: BsLinkedin, href: "https://www.linkedin.com/in/avinash-potnuru/", label: "LinkedIn" },
  { icon: BsInstagram, href: "https://www.instagram.com/potnuru_avinash/", label: "Instagram" },
  { icon: BsFacebook, href: "https://www.facebook.com/avinash.potnuru.18", label: "Facebook" },
];

const Contact = () => {
  const dispatch = useDispatch();

  const contactInfoMapped = contactInfo.map(({ icon: Icon, type, label, href }, i) => {
    const rowContent = (
      <>
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eef6fb] text-xl text-[#0c7fb0] transition-all duration-300 group-hover:bg-[#0c7fb0] group-hover:text-white group-hover:shadow-md">
          <Icon aria-hidden="true" />
        </span>
        <span className="min-w-0">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400">
            {type}
          </span>
          <span className="mt-0.5 block truncate font-medium text-[#0b2230] transition-colors group-hover:text-[#0863bf]">
            {label}
          </span>
        </span>
      </>
    );

    return (
      <Reveal
        as="li"
        key={type}
        delay={Math.min(i, 3) * 0.06}
        className="group border-b border-slate-100"
      >
        {href ? (
          <a href={href} className="flex items-center gap-4 px-1 py-5">
            {rowContent}
          </a>
        ) : (
          <div className="flex items-center gap-4 px-1 py-5">{rowContent}</div>
        )}
      </Reveal>
    );
  });

  const socialLinksMapped = socialLinks.map(({ icon: Icon, href, label }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label || `Visit ${href}`}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-[#0b2230] transition-all duration-300 hover:-translate-y-1 hover:border-[#0c7fb0] hover:bg-[#0c7fb0] hover:text-white hover:shadow-md"
    >
      <Icon size={20} aria-hidden="true" />
    </a>
  ));

  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-16 pt-10 md:px-10 md:pt-20">
      <Reveal>
        <span className="section-kicker">Contact</span>
      </Reveal>
      <Reveal
        delay={0.05}
        as="h1"
        className="mt-3 max-w-2xl font-roboto-slab text-3xl font-bold tracking-tight text-[#0b2230] sm:text-4xl lg:text-5xl"
      >
        Get in touch<span className="text-[#0c7fb0]">.</span>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 max-w-xl leading-relaxed text-gray-600">
          Have a question, a project in mind, or an opportunity to discuss? My
          inbox is always open — I usually reply within a day.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div className="min-w-0">
          <Reveal delay={0.05}>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              Direct channels
            </h2>
          </Reveal>
          <ul className="mt-4 border-t border-slate-100">
            {contactInfoMapped}
          </ul>

          <Reveal delay={0.15} className="mt-8">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              Follow along
            </h2>
            <div className="mt-4 flex gap-3">{socialLinksMapped}</div>
          </Reveal>
        </div>

        <Reveal
          delay={0.15}
          className="relative overflow-hidden rounded-2xl bg-[#061820] p-8 md:p-10"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#0c7fb0]/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-[#0863bf]/25 blur-3xl"
          />
          <div className="relative">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0c7fb0]">
              Start a conversation
            </span>
            <h2 className="mt-3 font-roboto-slab text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl">
              Let&apos;s build something great together.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Tell me about your idea, role, or project — and I&apos;ll get back
              to you as soon as possible.
            </p>
            <div className="relative z-0 mt-8 inline-block rounded-xl bg-white p-1 shadow-lg">
              <button
                onClick={() => dispatch(openContactPopup())}
                className="contact"
              >
                Contact US
                <span className="first"></span>
                <span className="second"></span>
                <span className="third"></span>
                <span className="fourth"></span>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default memo(Contact);