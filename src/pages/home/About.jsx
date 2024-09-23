import React, { useState } from "react";
import { BiUser, BiBriefcase, BiBook } from "react-icons/bi";
import images from "../../Constants/images";

const experienceData = [
  {
    title: "experience",
    data: [
      {
        company: "Alfan Services",
        role: "Junior Frontend Developer",
        description:
          "Collaborated with cross-functional teams to create wireframes, mockups, and prototypes for various digital projects, focusing on enhancing user experience and interface aesthetics.",
        years: "2023 To Date",
      },
      {
        company: "Uppercut Media",
        role: "Frontend Developer",
        description:
          "Provided freelance web design and development services to clients on Studypool platform, delivering custom solutions tailored to their specific needs and requirements.",
        years: "2022 - 2024",
      },
      {
        company: "IYF Kenya",
        role: "UI/UX Designer",
        description:
          "Participated in a frontend development internship at IYF Kenya, gaining hands-on experience in building responsive and user-friendly web interfaces using modern web technologies.",
        years: "2023",
      },
    ],
  },
];

const education = [
  {
    school: "IYF Weekend Academy",
    degree: "UI/UX Design",
    description:
      "Focused on the fundamentals of user interface and user experience design, with an emphasis on practical applications in web development.",
    years: "2024",
  },
  {
    school: "IYF Kenya",
    degree: "Web Development",
    description:
      "Gained hands-on experience in building and maintaining responsive websites, developing strong skills in web development",
    years: "2023",
  },
  {
    school: "Skypath Aviation",
    degree: "Aeronautical Engineering",
    description:
      "Completed a Diploma program, securing both a professional license and a type rating certificate, with comprehensive training in aircraft systems and maintenance.",
    years: "2019-22",
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("bio");

  return (
    <section className="xl:h-full pb-12 xl:py-24" id="about">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-12 text-center mx-auto mt-8 md:mt-0">
          About Me
        </h2>
      </div>

      {/* Animation */}
      <div className="flex flex-col xl:flex-row ">
        <div className="hidden xl:flex flex-1 relative w-[500px] h-[500px]">
          <dotlottie-player
            src="https://lottie.host/be9a8be2-a209-49aa-bd91-8969cd03266a/P6YopAYEyt.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            className="lottie "
          ></dotlottie-player>
        </div>

        {/* Tabs */}
        <div className="flex-1">
          {/* Tabs Header */}
          <div className="border-gray-300 rounded-full mb-4 p-[.2rem] items-center md:border lg:border">
            <div className="w-full grid xl:grid-cols-3 xl:max-w-[520px] gap-4 md:gap-0">
              <button
                onClick={() => setActiveTab("bio")}
                className={`flex flex-row gap-4 flex-1  text-center justify-center py-2 font-semibold transition duration-300 ease-in-out rounded-full ${
                  activeTab === "bio"
                    ? "bg-primary text-white border border-primary"
                    : "bg-transparent text-gray-700"
                }`}
              >
                <BiUser size={20} /> Bio
              </button>
              <button
                onClick={() => setActiveTab("experience")}
                className={`flex flex-row gap-4 flex-1 text-center justify-center items-center py-2 font-semibold transition duration-300 ease-in-out rounded-full ${
                  activeTab === "experience"
                    ? "bg-primary text-white border border-primary"
                    : "bg-transparent text-gray-700"
                }`}
              >
                <BiBriefcase size={20} /> Experience
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`flex flex-row gap-4 flex-1 text-center justify-center py-2 font-semibold transition duration-300 ease-in-out rounded-full ${
                  activeTab === "education"
                    ? "bg-primary text-white border border-primary"
                    : "bg-transparent text-gray-700"
                }`}
              >
                <BiBook size={20} /> Education
              </button>
            </div>
          </div>

          {/* Tabs Content */}
          <div className="p-4">
            {activeTab === "bio" && (
              <div className="flex flex-col gap-6">
                <p className="subtitle max-w-xl max-auto xl:mx-0">
                  As a frontend developer, I excel in creating user-centric
                  digital experiences by seamlessly integrating design and
                  functionality. With a strong foundation in UI/UX design, I
                  prioritize meticulous attention to detail, ensuring that every
                  element not only captivates but also enhances usability. I
                  actively engage with web development communities, contributing
                  insights and collaborating with peers to foster innovation.
                  Committed to continuous professional growth, I strive to
                  deliver impactful digital solutions that resonate with users
                  and drive success.
                </p>
                <marquee behavior="slide" direction="right-left">
            <div className="flex gap-4">
              <img src={images.react} className="w-14 marquee-img"/>
              <img src={images.javascript} className="w-14 marquee-img"/>
              <img src={images.figma} className="w-14 marquee-img"/>
              <img src={images.tailwind} className="w-14 marquee-img"/>
              <img src={images.git} className="w-14 marquee-img"/>
              <img src={images.sass} className="w-14 marquee-img"/>
              <img src={images.python} className="w-14 marquee-img"/>
              <img src={images.node} className="w-14 marquee-img"/>
              <img src={images.flask} className="w-14 marquee-img"/>
            </div>
          </marquee>
              </div>
            )}

            {activeTab === "experience" && (
              <div>
                <ul className="flex flex-col gap-y-8">
                  {experienceData[0].data.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-x-8 group bg-blue-50 rounded "
                    >
                      <div className="h-[100px] w-[1px] bg-border relative ml-2">
                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[105px] group-hover:bg-secondary transition-all duration-500 "></div>
                      </div>

                      <div className="flex flex-col md:flex-row justify-between items-center p-3">
                        <div className="flex flex-col w-full md:w-[35%]  ">
                          <div className="font-bold text-lg leading-none mb-2 group-hover:text-secondary ">
                            {item.role}
                          </div>
                          <div className=" text-lg  leading-none text-muted-foreground mb-4">
                            {item.company}
                          </div>
                          <div className="text-base font-medium ">
                            {item.years}
                          </div>
                        </div>

                        <div className="w-full text-sm md:w-[60%] ">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "education" && (
              <div>
                <ul className="flex flex-col gap-y-8">
                  {education.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-x-8 group rounded bg-blue-50"
                    >
                      <div className="h-[100px] w-[1px] bg-border relative ml-2">
                        <div className="w-[11px] h-[11px] rounded-full bg-secondary absolute -left-[5px] group-hover:translate-y-[105px] group-hover:bg-primary transition-all duration-500 "></div>
                      </div>

                      <div className="flex flex-col md:flex-row justify-between items-center p-3 w-full">
                        <div className="flex flex-col w-full md:w-[35%]">
                          <div className="font-bold text-lg leading-none mb-2 group-hover:text-primary">
                            {item.degree}
                          </div>
                          <div className="text-lg leading-none text-muted-foreground mb-4 ">
                            {item.school}
                          </div>
                          <div className="text-base font-medium ">
                            {item.years}
                          </div>
                        </div>

                        <div className="w-full text-sm md:w-[60%]">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
