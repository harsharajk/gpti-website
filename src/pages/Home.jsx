import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import CompanyIntro from "../components/CompanyIntro/CompanyIntro";
import Clients from "../components/Clients/Clients";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <CompanyIntro />
      <Clients />
    </>
  );
};

export default Home;