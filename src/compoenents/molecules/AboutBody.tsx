import React from "react";
import MissionIcon from "../atoms/vectors/about/MissionIcon";
import UsersIcon from "../atoms/vectors/about/UsersIcon";
import VisionIcon from "../atoms/vectors/about/VisionIcon";
import SingleAbout from "./SingleAbout";

const AboutBody = () => {
  return (
    <main className=" mr-[8.5rem] mb-[4.0625rem] ml-[9.375rem]">
      <SingleAbout
        title="About us"
        icon={<UsersIcon className="w-[5.06625rem] mr-[1.49625rem]" />}
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
