import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { MdLink } from "react-icons/md";

const ProjectCard = ({ project }) => {
  return (
    <Box
      borderRadius="lg"
      transition="0.3s"
      _hover={{ boxShadow: "sm" }}
      className="group overflow-hidden relative h-[480px]"
    >
      <div className="cardHeader p-0">
        {/* Image */}
        <div className="relative w-full h-[300px] flex items-center justify-center bg-gradient-to-b from-slate-50 to-transparent">
          <Image
            src={project.image}
            className="absolute bottom-0 shadow-2xl"
            width={250}
            height={255}
            priority="true"
            borderTopLeftRadius="lg" 
            borderTopRightRadius="lg"
            objectFit="cover"
          />
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bg-secondary left-[50%] top-[50%] w-[45px] h-[45px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 transform -translate-x-[50%] -translate-y-[50%]"
          >
            <MdLink className="text-white self-center" size={25} />
          </a>
        </div>
      </div>

      <div className="h-full px-8 py-6">
        <button className="btn3 px-2 py-1 uppercase text-xs font-medium mb-2 absolute top-4 left-5 opacity-[70%]">
          {project.category}
        </button>

        <h2 className="mb-1 font-semibold text-xl">{project.title}</h2>
        <p className="text-text-alt font-light">{project.description}</p>
      </div>
    </Box>
  );
};

export default ProjectCard;
