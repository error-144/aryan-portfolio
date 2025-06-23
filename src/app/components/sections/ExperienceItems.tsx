import { CiGlobe } from "react-icons/ci";
import { IoShuffle } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPlay } from "react-icons/fa";

export default function ExperienceItem() {
  return (
    <section
      className="relative col-span-2 row-span-4 col-start-3 bg-spotify-light-dark rounded-xl max-md:overflow-y-scroll overflow-hidden max-md:col-span-1"
      id="experience"
    >
      <div className="bg-spotify-gray p-6">
        <h2 className="text-xl font-bold mb-1">Experience / Certifications</h2>
        <p className="flex items-center gap-1.5 text-spotify-grey text-sm">
          <CiGlobe className="text-lg" />
          1208 saves • 21h 03m
        </p>
      </div>

      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-spotify-green p-3.5 hover:scale-105 transition-transform">
              <FaPlay className="text-spotify-black text-sm" />
            </button>
            <div className="flex items-center gap-5">
              <IoShuffle className="text-3xl text-spotify-grey sm:hover:text-white transition-colors" />
              <FiPlusCircle className="text-2xl text-spotify-grey sm:hover:text-white transition-colors" />
              <MdOutlineDownloadForOffline className="text-2xl text-spotify-grey sm:hover:text-white transition-colors" />
              <BsThreeDots className="text-2xl text-spotify-grey sm:hover:text-white transition-colors" />
            </div>
          </div>
          <RxHamburgerMenu className="text-2xl text-spotify-grey sm:hover:text-white transition-colors" />
        </div>
      </div>

      <Positions />
    </section>
  );
}

function Positions() {
  return (
    <div className="px-4 pb-4 md:overflow-y-auto sm:h-[300px]">
      {experienceLists.map((position: experienceListsProps, index) => (
        <div
          className="flex items-center gap-4 p-2.5 sm:hover:bg-[#282828] rounded-lg transition-colors group"
          key={position.companyName}
        >
          <span className="text-spotify-grey sm:group-hover:text-white min-w-[20px]">
            {index + 1}
          </span>
          <div className="flex-1">
            <p className="text-spotify-green text-sm font-semibold mb-0.5">
              {position.companyName}
            </p>
            <p className="font-bold text-md mb-0.5">{position.positionTitle}</p>
            <p className="text-spotify-gray text-sm">{position.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

type experienceListsProps = {
  companyName: string;
  positionTitle: string;
  date: string;
};

const experienceLists: experienceListsProps[] = [
  {
    companyName: "Amazon Web Services",
    positionTitle: "AWS Cloud Practitioner Certification",
    date: "May 2025 - Present",
  },
  {
    companyName: "Codsoft",
    positionTitle: "AI - ML Software Engineer Intern",
    date: "September 2024 - October 2024",
  },
  {
    companyName: "Microsoft Azure",
    positionTitle: "Microsoft Certified: Azure AI Fundamentals",
    date: "April 2025 - Present",
  },
  {
    companyName: "WorldQuant ",
    positionTitle: "WorldQuant consultant",
    date: "April 2023 – Present",
  },
  {
    companyName: "Vaishnavi Enterprises",
    positionTitle: "Software Engineer Intern",
    date: "September 2024 - present",
  },
  
  {
    companyName: "Postman APIs",
    positionTitle: "Postman Student Expert : API Fundamentals",
    date: "February 2024 - Present",
  },
  {
    companyName: "Standards Club",
    positionTitle: "Senior core member",
    date: "September 2023 - Present",
  },
  {
    companyName: "CodeForces",
    positionTitle: "CodeForces Expert rated",
    date: "September 2023 - Present",
  },
  
];
