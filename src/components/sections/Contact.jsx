import React from "react";
import MainButton from "../MainButton";
import IgIcon from "../icons/ig-icon";
import ContactIcon from "../ContactIcon";
import { contacts, socialMedia } from "@/data";
import ContactCard from "../ContactCard";

export default function Contact() {
  return (
    <div className="mt-14">
      <div className="bg-grey-primary-bg rounded-xl py-6 px-6 lg:px-24 text-center">
        <h2 className="font-semibold text-2xl mb-7 text-black-primary">
          Besides that, I am also avaible for  <br /> Freelancer Project
        </h2>
        <p className="text-black-main mb-9">
          I have experience working on educational projects such as Decision
          Support System (SPK), forecasting, data mining, expert systems and as
          well as thesis projects (S1). I also work on projects for businesses
          such as company profiles or others.
        </p>
        <MainButton title={"contact me"} />
      </div>
      <div className="text-center mt-14">
        <h3 className="text-black-primary font-semibold text-2xl mb-3">
          Personal Contact
        </h3>
        <p className="text-black-main mb-3">
          It will be nice if we can work together!
        </p>
        <div className="flex justify-center gap-2">
          {socialMedia.map((sm, index) => {
            return <ContactIcon key={index} contact={sm} />;
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14">
          {contacts.map((contact, index) => {
            return (
              <div className="" key={index}>
                <ContactCard contact={contact} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
