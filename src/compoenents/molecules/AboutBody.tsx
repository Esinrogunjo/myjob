import React from "react";
import MissionIcon from "../atoms/vectors/about/MissionIcon";
import MissionSmall from "../atoms/vectors/about/MissionSmall";
import UsersIcon from "../atoms/vectors/about/UsersIcon";
import UserSmall from "../atoms/vectors/about/UserSmall";
import VisionIcon from "../atoms/vectors/about/VisionIcon";
import VisionSmall from "../atoms/vectors/about/VisionSmall";
import SingleAbout from "./SingleAbout";

const AboutBody = () => {
  return (
    <main className=" mx-6 md:mr-[8.5rem] mb-[4.0625rem] md:ml-[9.375rem]">
      <SingleAbout
        title="About us"
        icon={<UsersIcon className="w-[5.06625rem] mr-[1.49625rem]" />}
        iconSmall={<UserSmall />}
        content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
            quam non justo nibh laoreet accumsan ultrices. Vestibulum, neque nec
            egestas blandit natoque donec ipsum lorem. Pharetra urna, porta
            tristique blandit feugiat. At lacinia nisi nisi, nulla. Sed in
            ornare hac semper et vestibulum, vel feugiat leo. Faucibus at massa
            non orci enim quis ac pretium congue. Duis ultrices tortor amet,
            mattis sollicitudin posuere. Adipiscing vitae sem donec sollicitudin
            volutpat vivamus felis ipsum. Dignissim vel fames leo nisl."
      />
      <SingleAbout
        title="Our Vision"
        icon={<VisionIcon className="w-[5.06625rem] mr-[1.49625rem]" />}
        iconSmall={<VisionSmall />}
        content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
            quam non justo nibh laoreet accumsan ultrices. Vestibulum, neque nec
            egestas blandit natoque donec ipsum lorem. Pharetra urna, porta
            tristique blandit feugiat. At lacinia nisi nisi, nulla. Sed in
            ornare hac semper et vestibulum, vel feugiat leo. Faucibus at massa
            non orci enim quis ac pretium congue. Duis ultrices tortor amet,
            mattis sollicitudin posuere. Adipiscing vitae sem donec sollicitudin
            volutpat vivamus felis ipsum. Dignissim vel fames leo nisl."
      />
      <SingleAbout
        title="Our MIssion "
        icon={<MissionIcon className="w-[5.06625rem] mr-[1.49625rem]" />}
        iconSmall={<MissionSmall />}
        content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
            quam non justo nibh laoreet accumsan ultrices. Vestibulum, neque nec
            egestas blandit natoque donec ipsum lorem. Pharetra urna, porta
            tristique blandit feugiat. At lacinia nisi nisi, nulla. Sed in
            ornare hac semper et vestibulum, vel feugiat leo. Faucibus at massa
            non orci enim quis ac pretium congue. Duis ultrices tortor amet,
            mattis sollicitudin posuere. Adipiscing vitae sem donec sollicitudin
            volutpat vivamus felis ipsum. Dignissim vel fames leo nisl."
      />
    </main>
  );
};

export default AboutBody;
