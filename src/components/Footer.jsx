import { AiOutlineGithub, AiOutlineWhatsApp, AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-200 py-8 mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">

          {/* Socials */}
          <div className="flex gap-x-8 text-primary text-[20px] mx-auto xl:mx-0 mb-4">
            <a 
              href="https://github.com/Hector-John" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-secondary"
            >
              <AiOutlineGithub size={24} />
            </a>
            <a 
              href="https://www.youtube.com/@hakheem67" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-secondary"
            >
              <AiOutlineYoutube size={24} />
            </a>
            <a 
              href="https://www.instagram.com/_h.e.c.t.o.r_j.o.h.n_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-secondary"
            >
              <AiOutlineInstagram size={24} />
            </a>
            <a 
              href="https://wa.me/+254769403162" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-secondary"
            >
              <AiOutlineWhatsApp size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/john-hector/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-secondary"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="copyright text-muted-foreground">
            Copyright &copy; Hector John. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
