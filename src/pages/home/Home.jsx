import Hero from "./Hero";
import About from "./About";
import Work from "./Work";
import Cta from "./Cta";

const Home = () => {
  return (
    <section>
      <div className="px-container">
        <Hero />
        <About />
        <Work />
        <Cta />
      </div>
    </section>
  );
};

export default Home;
