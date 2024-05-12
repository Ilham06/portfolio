import React from "react";
import MainButton from "../MainButton";
import IgIcon from "../icons/ig-icon";
import ContactIcon from "../ContactIcon";
import { contacts, socialMedia } from "@/data";
import ContactCard from "../ContactCard";

export default function Contact() {
  let iconDelay = 400;
  let cardDelay = 600;
  return (
    <div className="mt-24" id="contact">
      <div
        className="bg-grey-primary-bg rounded-xl py-6 px-6 lg:px-24 text-center"
        data-aos="zoom-in"
        data-aos-delay="400"
        data-aos-duration="1000"
      >
        <h2 className="font-semibold text-2xl mb-7 text-black-primary">
          Besides that,{" "}
          <span className="text-blue-primary">I am also avaible</span> for {" "}
          <br /> <span className="text-blue-primary">Freelancer Project</span>
        </h2>
        <p className="text-black-main mb-9">
          I have experience working on{" "}
          <span className="font-medium">educational projects</span> such as
          Decision Support System (SPK), forecasting, data mining, expert
          systems and as well as thesis projects (S1). I also work on projects
          for <span className="font-medium">businesses </span>
          such as{" "}
          <span className="font-medium">
            goverement, company profiles or others.
          </span>
        </p>
        <MainButton title={"contact me"} />
      </div>
      <div className="text-center mt-14">
        <div
          className=""
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="900"
        >
          <h3 className="text-black-primary font-semibold text-2xl mb-3">
            Personal <span className="text-blue-primary">Contact</span>
          </h3>
          <p className="text-black-main mb-8">
            It will be nice if we can work together!
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
            cardDelay += 200
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
    </div>
  );
}
