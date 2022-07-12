import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  InstapaperShareButton,
  EmailShareButton,
} from "react-share";
import Cancel from "../atoms/vectors/Cancel";
import EmailIcon from "../atoms/vectors/EmailIcon";
import FacebookIcon from "../atoms/vectors/FacebookIcon";
import InstagramIcon from "../atoms/vectors/InstagramIcon";
import TwitterIcon from "../atoms/vectors/TwitterIcon";
const ShareModal = ({
  closeModal = () => {},
  deSpringed,
  showModal,
}: {
  closeModal?: Function;
  deSpringed?: boolean;
  showModal?: boolean;
}) => {
  return (
    <div
      className={`${
        deSpringed ? "animate-fade_out " : showModal && "animate-spring "
      } origin-bottom-left motion-reduce:transition-transform  w-[16.8125rem] h-[22.75rem] absolute bg-primary  z-10  -top-[22.75rem] mx-auto rounded-[0.625rem]`}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between ml-[2.125rem]">
          <span className="font-bold text-lg leading-[3.625rem] text-baseText">
            Share Job
          </span>
          <span>
            <Cancel
              height={"2rem"}
              width={"2rem"}
              onClick={() => closeModal()}
            />
          </span>
        </div>

        <FacebookShareButton
          url="http://www.facebook.com"
          className="flex gap-x-[1.3125rem] ml-[2.125rem] items-center"
        >
          <FacebookIcon height={"3.125rem"} width={"3.125rem"} />
          <span className="font-bold text-lg leading-[3.625rem] text-baseText">
            Facebook
          </span>
        </FacebookShareButton>

        <InstapaperShareButton
          url="http://www.facebook.com"
          className="flex gap-x-[1.3125rem] ml-[2.125rem] items-center"
        >
          <InstagramIcon height={"3.125rem"} width={"3.125rem"} />
          <span className="font-bold text-lg leading-[3.625rem] text-baseText">
            Instagram
          </span>
        </InstapaperShareButton>

        <TwitterShareButton
          url="http://www.facebook.com"
          className="flex gap-x-[1.3125rem] ml-[2.125rem] items-center"
        >
          <TwitterIcon height={"3.125rem"} width={"3.125rem"} />
          <span className="font-bold text-lg leading-[3.625rem] text-baseText">
            Twitter
          </span>
        </TwitterShareButton>

        <EmailShareButton
          url="http://www.facebook.com"
          className="flex gap-x-[1.3125rem] ml-[2.125rem] items-center"
        >
          <EmailIcon className="h-[3.125rem] w-[3.125rem] rounded-full" />
          <span className="font-bold text-lg leading-[3.625rem]  text-baseText ">
            Email
          </span>
        </EmailShareButton>
      </div>
    </div>
  );
};

export default ShareModal;
