import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import images from "../../Constants/images";

const Projects = () => {
  const projects = [
    {
      title: "East Side Street Wear", 
      description: "An e-commerce platform for a streetwear brand, built with modern UI/UX principles, smooth product browsing, secure checkout, and a clean, mobile-first design.",
      category: "Fullstack",
      image: images.eastside,
      projectLink: "https://east-side-urban-frontend.onrender.com",
    },
    {
      title: "Skill Bridge", 
      description: "A full-stack web app that connects learners with curated resources, featuring user authentication, dynamic content management, and a responsive UI for seamless learning experiences.",
      category: "Fullstack",
      image: images.skillbridge,
      projectLink: "https://skilly-bridge.vercel.app",
    },
    {
      title: "Trendify",
      description:
        "A convenient shoe delivery app offering a wide selection of footwear delivered straight to your doorstep with ease and efficiency",
      category: "Frontend",
      image: images.trendify,
      projectLink: "https://trendi-fy.netlify.app",
    },
    {
      title: "Medilop",
      description:
        "Medilop is a health platform that connects patients with doctors for online consultations.",
      category: "Frontend",
      image: images.medilop,
      projectLink: "https://medilop.vercel.app",
    },
    {
      title: "Kheem NGO",
      description:
        "An NGO website designed to promote provision of welfare services to the less fortunate and those in need.",
      category: "Frontend",
      image: images.myngo,
      projectLink: "https://my-ngo.vercel.app",
    },
    {
      title: "PizzaVille",
      description:
        "A deliciously interactive pizza restaurant website where you can customize your own pies.",
      category: "Frontend",
      image: images.pizzaville,
      projectLink: "https://pizzaville.netlify.app/",
    },
    {
      title: "M.Y.T.O",
      description:
        "The official landing page for MYTO (Milango Ya Tumaini Organisation.",
      category: "Frontend",
      image: images.myto,
      projectLink: "https://milango-ya-tumaini.org",
    },
    {
      title: "Hakheem Tech",
      description:
        "A school website landing page.",
      category: "Frontend",
      image: images.uniwebsite,
      projectLink: "https://hakheem-university.netlify.app",
    },
    // {
    //   title: "RoadMate",
    //   description:
    //     "RoadMate is a transport app offering real-time vehicle tracking, safety ratings, route updates, and cashless payments for safer, more reliable commuting..",
    //   category: "UI/UX Design",
    //   image: images.example,
    //   projectLink: "/projects/Roadmate",
    // },
    // {
    //   title: "Acadix",
    //   description:
    //     "An innovative learning platform connecting students with resources and mentors.",
    //   category: "UI/UX Design",
    //   image: images.example,
    //   projectLink: "/projects/Acadix",
    // },
  ];

  const uniqueCategories = [
    "All projects",
    ...new Set(projects.map((project) => project.category)),
  ];

  const [category, setCategory] = useState("All projects");

  const filteredProjects =
    category === "All projects"
      ? projects
      : projects.filter((project) => project.category === category);

  return (
    <section className="min-h-screen pt-8">
      <div className="container px-[10%] mx-auto">

        {/* Tabs */}
        <div className="hidden mb-12 items-center  ">
          <div className="border-gray-200 p-[.2rem] rounded-full flex flex-col justify-center items-center md:flex-row gap-4 lg:border w-fit mx-auto">
            {uniqueCategories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setCategory(cat)}
                className={`btn3 text-center py-2 px-4 transition duration-300 ease-in-out rounded-full 
          ${
            category === cat
              ? "bg-primary text-white border border-primary"
              : "bg-transparent text-gray-700 border border-gray-300"
          }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
