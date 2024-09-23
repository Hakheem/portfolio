import { Send, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { AiOutlineGithub, AiOutlineWhatsApp } from "react-icons/ai";
import images from "../../Constants/images";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Hero = () => {
  const whatsapp =
    "https://api.whatsapp.com/send?phone=254738358757&text=Hello%2C%20I%27m%20interested%20in%20your%20services.";
  const linkToGitHub = "https://github.com/Hector-John";
  const linkToMail = "mailto:hectorjohn254@gmail.com";
  const linkedin = "https://www.linkedin.com/in/john-hector/";

  const Whatsapp = () => {
    window.open(whatsapp, "_blank");
  };

  const GitHub = () => {
    window.open(linkToGitHub, "_blank");
  };

  const Mail = () => {
    window.open(linkToMail, "_blank");
  };
  const Linkedin = () => {
    window.open(linkedin, "_blank");
  };

  const [text] = useTypewriter({
    words: ["Frontend Developer", "UI/UX Designer"],
    loop: true,
    deleteSpeed: 80,
  });

  return (
    <section className="h-[85vh] flex justify-between items-center relative ">
      <div className="flex w-full md:w-[45%] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
         <div className="flex flex-row lg:justify-start justify-center text-md uppercase font-semibold mb-4 text-secondary tracking-[4px] md:mt-4">
  {text}
  <div className="hidden md:block">
    <Cursor />
  </div>
</div>


          <h1 className="h1 mb-3">
            Hello, my name is <span className="text-primary">Hector John</span>
          </h1>
          <p className="subtitle text-text-alt mx-auto xl:mx-0">
            A dynamic problem solver, proficient in frontend development, and
            adept at creating engaging user experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-6">
            <Link to="about" smooth={true}> 
              <button className="btn2 py-3 px-5 flex items-center gap-3">
                About Me <User size={18} />
              </button>
            </Link>
            <NavLink to="/contact">
              <button className="btn1 py-3 px-5 flex items-center gap-3">
                Contact Me <Send size={18} />
              </button>
            </NavLink>
          </div>

          {/* Socials */}
          <div className="flex flex-row justify-center md:justify-start items-center gap-x-4 mx-0 xl:mx-0">
            <BiLogoGmail
              size={25}
              className="cursor-pointer hover:text-primary transition-colors duration-300"
              onClick={Mail}
            />
            <AiOutlineGithub
              size={25}
              className="cursor-pointer hover:text-primary transition-colors duration-300"
              onClick={GitHub}
            />
            <AiOutlineWhatsApp
              size={25}
              className="cursor-pointer hover:text-primary transition-colors duration-300"
              onClick={Whatsapp}
            />
            <FaLinkedinIn
              size={25}
              className="cursor-pointer hover:text-primary transition-colors duration-300"
              onClick={Linkedin}
            />
          </div>
        </motion.div>
      </div>

      <div className="">
        <motion.div
          whileInView={{ y: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className=" hidden md:block"
        >
          <img src={images.heroImg} />
        </motion.div>
        <div className="hidden md:block">
          <img
            src={images.react}
            className="absolute w-[80px] h-[80px] top-[3%] right-[12%] z-[-3] animate-fadeInRotate"
          />

          <img
            src={images.javascript}
            className="absolute w-[80px] h-[80px] top-[47%] left-[58.5%] z-[-3] animate-fadeIn"
          />

          <img
            src={images.figma}
            className="absolute w-[70px] h-[70px] top-[56%] right-[5%] z-[-3] animate-fadeInLong"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
