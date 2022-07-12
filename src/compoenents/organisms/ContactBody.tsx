import React from "react";
import Button from "../atoms/forms/Button";
import Input from "../atoms/forms/Input";
import EmailSmallIcon from "../atoms/vectors/contact/EmailSmallIcon";
import PhoneIcon from "../atoms/vectors/contact/PhoneIcon";
import SupportIcon from "../atoms/vectors/contact/SupportIcon";

const ContactBody = () => {
  return (
    <div className="mx-[9.375rem] flex flex-col shadowContact p-[3.5625rem] mb-[3.5625rem]">
      <h2 className="text-[2rem] font-semibold leading-[3.36625rem] mb-[2.86375rem]">
        Feel free to drop message for us
      </h2>
      <div
        className="grid mb-[2.901875rem]"
        style={{ gridTemplateColumns: "auto auto" }}
      >
        <form action="" className="flex flex-col w-[33.050625rem] gap-y-6 ">
          <Input placeholder="Name" className="w-full px-2 " type={"text"} />
          <Input placeholder="Email" className="w-full px-2 " type={"email"} />
          <Input placeholder="Subject" className="w-full px-2 " type={"text"} />
          <textarea
            className="w-full px-2 flex-grow "
            placeholder="Input Text"
          ></textarea>
        </form>
        <div className="flex flex-col gap-y-[2.9rem] ">
          <div className="flex flex-col bg-primary text-baseText rounded-[0.47411875rem] ">
            <div
              className="grid ml-[1.8125rem] items-center  mt-[1.754375rem] mb-[1.756875rem] w-[11.5625rem] gap-x-[1.78125rem]"
              style={{ gridTemplateColumns: "1.40375rem auto" }}
            >
              <EmailSmallIcon className="h-[1.40375rem] w-[1.40375rem]" />
              <div className="flex flex-col">
                <span className="text-lg font-semibold leading-[1.36125rem]">
                  info@myjobs.com.ng
                </span>
                <span className="text-sm font-normal leading-[1.05875rem]">
                  lorem ispum lorem
                </span>
                <span className="text-sm font-normal leading-[1.05875rem]">
                  lorem ispum lorem
                </span>
              </div>
            </div>
            <div
              className="grid ml-[1.8125rem] items-center  mt-[1.754375rem] mb-[1.756875rem] gap-x-[1.78125rem]"
              style={{ gridTemplateColumns: "1.40375rem auto" }}
            >
              <PhoneIcon className="h-[1.40375rem] w-[1.40375rem]" />
              <div className="flex flex-col">
                <span className="text-lg font-semibold leading-[1.36125rem]">
                  +2348135036111
                </span>
                <span className="text-sm font-normal leading-[1.05875rem]">
                  lorem ispum lorem
                </span>
                <span className="text-sm font-normal leading-[1.05875rem]">
                  lorem ispum lorem
                </span>
              </div>
            </div>

            <div
              className="grid ml-[1.8125rem] items-center  mt-[1.754375rem] mb-[1.756875rem] gap-x-[1.78125rem]"
              style={{ gridTemplateColumns: "1.40375rem auto" }}
            >
              <SupportIcon className="h-[1.40375rem] w-[1.40375rem]" />
              <div className="flex flex-col">
                <span className="text-sm font-normal leading-[1.05875rem]">
                  lorem ispum lorem
                </span>
                <span className="text-sm font-normal leading-[1.05875rem]">
                  lorem ispum lorem
                </span>
                <span className="text-lg font-semibold leading-[1.36125rem]">
                  Support center {"-->"}
                </span>
              </div>
            </div>
          </div>

          <div>
            <Button
              label="Send"
              className="bg-primary text-baseText w-full text-[1.375rem] font-medium leading-[2.0625rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBody;
