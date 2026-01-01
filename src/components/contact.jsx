import React from "react";
import { contacts, socialMedia } from "@/data";
import Link from "next/link";
import MainButton from "./buttons/MainButton";
import ContactCard from "./contactCard";
import ContactIcon from "./contactIcon";

export default function Contact() {
  let iconDelay = 300;
  let cardDelay = 400;

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden"
    >


      {/* CTA Card */}
      <div
        className="
          relative max-w-4xl mx-auto
          rounded-3xl bg-white
          px-6 py-12 lg:px-20
          text-center
          shadow-[0_20px_40px_-25px_rgba(0,0,0,0.3)]
        "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-black-primary mb-5 leading-tight">
          Let’s build something{" "}
          <span className="text-blue-primary">meaningful</span>
        </h2>

        <p className="text-black-main text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
          I’m available for freelance and collaboration opportunities.
          If you have an idea, product, or problem to solve — let’s talk
          and make it real.
        </p>

        <MainButton
          path="#my-contact"
          title="Start a project with me"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          }
        />
      </div>

      {/* Contact details */}
      <div
        id="my-contact"
        className="relative mt-32 text-center px-4"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <h3 className="text-2xl md:text-3xl font-extrabold text-black-primary mb-4">
            Get in <span className="text-blue-primary">touch</span>
          </h3>

          <p className="text-black-main mb-10 max-w-2xl mx-auto">
            Feel free to reach out via social media or direct contact.
            I’m always open to discussing new ideas and opportunities.
          </p>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-4 mb-16">
          {socialMedia.map((sm, index) => {
            iconDelay += 150;
            return (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={iconDelay}
              >
                <ContactIcon contact={sm} />
              </div>
            );
          })}
        </div>

        {/* Contact cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contacts.map((contact, index) => {
            cardDelay += 150;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={cardDelay}
              >
                <ContactCard contact={contact} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
