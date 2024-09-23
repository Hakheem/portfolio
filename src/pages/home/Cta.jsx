import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center text-text-main mb-8">
            Prepared to turn your idea into reality? I'm here to help
          </h2>
          <Link to="/contact" className="">
            <button className="btn3 py-3 px-6 rounded-full">Contact Me</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
