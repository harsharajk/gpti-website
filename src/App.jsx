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
import MagneticParticlePage from "./pages/MagneticParticlePage/MagneticParticlePage";
import UltrasonicTestingPage from "./pages/UltrasonicTestingPage/UltrasonicTestingPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import GalleryEventPage from "./pages/GalleryEventPage/GalleryEventPage";
import OurOfficesPage from "./pages/OurOfficesPage/OurOfficesPage";
import BoardOfDirectorsPage from "./pages/BoardOfDirectorsPage/BoardOfDirectorsPage";
import QualityPolicyPage from "./pages/QualityPolicyPage/QualityPolicyPage";
import QHSEPolicyPage from "./pages/QHSEPolicyPage/QHSEPolicyPage";
import ECataloguePage from "./pages/ECataloguePage/ECataloguePage";
import CertificatesPage from "./pages/CertificatesPage/CertificatesPage";

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
          path="/board-of-directors"
          element={<BoardOfDirectorsPage />}
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

        <Route
          path="/services/magnetic-particle-dye-penetrant"
          element={<MagneticParticlePage />}
        />

        <Route
          path="/services/ultrasonic-testing"
         element={<UltrasonicTestingPage />}
        />

        <Route
          path="/quality-policy"
          element={<QualityPolicyPage />}
        />

        <Route
          path="/qhse-policy"
          element={<QHSEPolicyPage />}
        />

        <Route
          path="/resources/e-catalogue"
          element={<ECataloguePage />}
        />

        <Route
          path="/resources/certificates"
          element={<CertificatesPage />}
        />

        <Route
          path="/resources/photo-gallery"
          element={<GalleryPage />}
        />

        <Route
           path="/resources/photo-gallery/:slug"
           element={<GalleryEventPage />}
        />

        <Route
          path="/our-offices"
          element={<OurOfficesPage />}
        />

      </Routes>

      <Footer />
    </>
  );
}

export default App;