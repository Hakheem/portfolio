import React from 'react';
import { Link } from 'react-router-dom';
import images from "../../Constants/images";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ProjectCard from '../../components/ProjectCard';

const projects = [
  {
    title: "Trendify",
    description: "A convenient shoe delivery app offering a wide selection of footwear delivered straight to your doorstep with ease and efficiency",
    category: "Fullstack",
    image: images.trendify,
    projectLink: "https://trendi-fy.netlify.app",
  },
  {
    title: "Medilop",
    description: "Medilop is a health platform that connects patients with doctors for online consultations.",
    category: "Frontend",
    image: images.medilop,
    projectLink: "https://medilop.vercel.app",
  },
  {
    title: "PizzaVille",
    description: "A deliciously interactive pizza restaurant website where you can customize your own pies.",
    category: "Frontend",
    image: images.pizzaville,
    projectLink: "https://pizzaville.netlify.app/",
  },
  {
    title: "M.Y.T.O",
    description: "The official landing page for MYTO (Milango Ya Tumaini Organisation).",
    category: "Frontend",
    image: images.myto,
    projectLink: "https://milango-ya-tumaini.org",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className='container mx-auto'>
        {/* Texts */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
          <h2 className='section-title mb-4'>My Creative Projects</h2>
          <p className='subtitle mb-8 '>
            Explore a selection of my web development projects, ranging from full-stack applications to sleek frontend designs. Each project showcases unique functionality and demonstrates my expertise in crafting user-friendly and responsive web experiences.
          </p>
          <Link to='/projects'>
            <button className='btn2 px-6 py-3'>All Projects</button>
          </Link>
        </div>

        {/* Slider */}
        <div className='xl:max-w-[670px] xl:absolute right-0 top-0'>
          <Swiper
            className='h-[520px]'
            slidesPerView={2}
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            grabCursor={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 2 }, 
            }}
          >
            {projects.slice(0, 4).map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Work;
