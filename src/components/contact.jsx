import React from "react";
import { contacts, socialMedia } from "@/data";
import Link from "next/link";
import ContactCard from "./contactCard";
import ContactIcon from "./contactIcon";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden"
    >


      {/* CTA Card */}
      <div
        className="relative mx-auto rounded-3xl bg-blue-600 px-6 py-20 lg:px-20 text-center overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Decorative circle — left (breathing) */}
        <div className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-2 border-white/10 animate-breathe" style={{ animationDelay: '0s' }} />
        <div className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-2 border-white/10 animate-breathe" style={{ animationDelay: '1s' }} />

        {/* Decorative circle — right (breathing) */}
        <div className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-2 border-white/10 animate-breathe" style={{ animationDelay: '2s' }} />
        <div className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-2 border-white/10 animate-breathe" style={{ animationDelay: '3s' }} />

        {/* Floating particles */}
        <div className="pointer-events-none absolute top-8 left-[15%] w-2 h-2 rounded-full bg-white/20 animate-float" />
        <div className="pointer-events-none absolute top-12 right-[20%] w-1.5 h-1.5 rounded-full bg-white/15 animate-float-slow" />
        <div className="pointer-events-none absolute bottom-10 left-[30%] w-2.5 h-2.5 rounded-full bg-white/10 animate-float-reverse" />

        {/* Text */}
        <h2 className="relative text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
          Let&apos;s create something
          <br />
          that <span className="text-blue-200">matters</span>
        </h2>

        <p className="relative text-blue-100 text-base md:text-lg mb-10 leading-relaxed max-w-xl mx-auto">
          If you have an idea, a challenge, or an opportunity —{" "}
          let&apos;s make it real.
        </p>

        {/* Button */}
        <Link href="#my-contact">
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] active:translate-y-0 transition-all duration-300 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            Start a project
          </button>
        </Link>
      </div>

      {/* Contact details */}
      <div
        id="my-contact"
        className="relative mt-24 text-center px-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Heading */}
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-600">
          Get in touch
        </span>
        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Let&apos;s <span className="text-gradient-blue">connect</span>
        </h3>
        <p className="text-gray-500 mb-10 max-w-xl mx-auto text-base leading-relaxed">
          Feel free to reach out via social media or direct contact.
          I usually respond within 24 hours.
        </p>

        {/* Social icons */}
        <div className="flex justify-center gap-3 mb-14">
          {socialMedia.map((sm, index) => (
            <ContactIcon key={index} contact={sm} />
          ))}
          {/* Email icon */}
          <ContactIcon
            contact={{
              url: `mailto:${contacts.find((c) => c.title === "email")?.value}`,
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              ),
            }}
          />
        </div>

        {/* Contact cards */}
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
          {contacts.map((contact, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <ContactCard contact={contact} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
