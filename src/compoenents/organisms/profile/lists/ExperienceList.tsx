import BitsmartIcon from "../../../atoms/vectors/BitsmartIcon";
import Experience from "../Experience";
import ExperienceHead from "../ExperienceHead";
import ExperienceRow from "../ExperienceRow";
import { LineLong } from "../Line";
import OmegaIcon from "../../../atoms/vectors/profile/omega.png";
import Gmt from "../../../atoms/vectors/profile/gmt.png";

const ExperienceList = () => {
  const hanadleClick = () => {};
  return (
    <Experience head={<ExperienceHead title={"Experience"} />}>
      <ExperienceRow
        icon={<BitsmartIcon className="w-[3.5625rem] mx-6  h-[4.79125rem] " />}
        onClick={hanadleClick}
      >
        <span className="text-[#424242] font-medium text-[1.375rem]">
          User Interface Designer
        </span>
        <span>Bitsmart Technology • Full-time </span>
        <span>May 2020 - Present • 1 yr 2 mos </span>
        <span>
          No 155 Opp. First Ekwa Church Taiwo Isale • Ilorin Kwara State •
          Nigeria{" "}
        </span>
      </ExperienceRow>
      <LineLong />
      <ExperienceRow
        icon={<img src={OmegaIcon} className="w-[2.848125rem] mx-6  h-12 " />}
        onClick={hanadleClick}
      >
        <span className="text-[#424242] font-medium text-[1.375rem]">
          Graphics Designer
        </span>
        <span>GoldenMabs Technologies </span>
        <span>May 2020 - Present • 1 yr 2 mos </span>
      </ExperienceRow>
      <LineLong />
      <ExperienceRow
        icon={<img src={Gmt} className="w-[3.0125rem] mx-6  h-10 " />}
        onClick={hanadleClick}
      >
        <span className="text-[#424242] font-medium text-[1.375rem]">
          Graphics Designer
        </span>
        <span>Omega Printing Press </span>
      </ExperienceRow>
    </Experience>
  );
};

export default ExperienceList;
