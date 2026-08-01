import "./App.css";

import { Routes, Route } from "react-router-dom";

import TopHeader from "./components/TopHeader/TopHeader";
import MainHeader from "./components/MainHeader/MainHeader";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage/AboutPage";
import VisionMissionPage from "./pages/VisionMissionPage/VisionMissionPage";
import OrganizationChartPage from "./pages/OrganizationChartPage/OrganizationChartPage";
import CareersPage from "./pages/CareersPage/CareersPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import RadiographyPage from "./pages/RadiographyPage/RadiographyPage";

function App() {
  return (
    <>
      <TopHeader />
      <MainHeader />
      <Navbar />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/vision-mission"
          element={<VisionMissionPage />}
        />

        <Route
          path="/organization-chart"
          element={<OrganizationChartPage />}
        />

        <Route
          path="/careers"
          element={<CareersPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

        <Route
        path="/services/gamma-xray-radiography"
         element={<RadiographyPage />}
        />

      </Routes>

      <Footer />
    </>
  );
}

export default App;