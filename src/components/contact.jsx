import React from "react";
// import MainButton from "../MainButton";
import { contacts, socialMedia } from "@/data";
import ContactCard from "./ContactCard";
import ContactIcon from "./ContactIcon";
import Link from "next/link";
import MainButton from "./buttons/MainButton";

export default function Contact() {
  let iconDelay = 400;
  let cardDelay = 600;
  return (
    <section className="py-36" id="contact">
      <div
        className="bg-grey-primary-bg rounded-xl py-6 px-6 lg:px-24 text-center"
        data-aos="zoom-in"
        data-aos-delay="400"
        data-aos-duration="1000"
      >
        <h2 className="font-bold text-2xl mb-7 text-black-primary">
          Besides that,{" "}
          <span className="text-blue-primary">I am also avaible</span> for {" "}
          <br /> <span className="text-blue-primary">Freelancer Project</span>
        </h2>
        <p className="text-black-main mb-9">
          I have extensive experience in delivering digital solutions across
          business, education, and government sectors, I am well-equipped to
          handle diverse project needs. I am committed to providing professional
          and tailored services to help bring your unique vision to life.
        </p>
        <MainButton
          path={"#my-contact"}
          title={"Start project with me"}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          }
        />
      </div>
      <div className="text-center pt-36" id="my-contact">
        <div
          className=""
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="900"
        >
          <h3
            className="text-black-primary font-bold text-2xl mb-3"
            id="personal-contact"
          >
            PERSONAL <span className="text-blue-primary">CONTACTS</span>
          </h3>
          <p className="text-black-main mb-8">
            Get in touch with us! Whether you have questions, need support, or
            want to collaborate, <br /> we're here to help. Reach out via phone,
            email, or visit us at our location. <br /> We look forward to
            connecting with you!
          </p>
        </div>
        <div className="flex justify-center gap-3">
          {socialMedia.map((sm, index) => {
            iconDelay += 200;
            return (
              <div
                className=""
                key={index}
                data-aos="zoom-in"
                data-aos-delay={iconDelay}
              >
                <ContactIcon contact={sm} />
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14">
          {contacts.map((contact, index) => {
            cardDelay += 200;
            return (
              <div
                className="mb-4 lg:mb-0"
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
