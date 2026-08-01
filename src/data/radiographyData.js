import bannerImage from "../assets/images/aboutPage/banner.jpg";

import sourceImage1 from "../assets/images/radiography/source1.jpg";
import sourceImage2 from "../assets/images/radiography/source2.jpg";

const radiographyData = {
  pageTitle: "Gamma and X-Ray Radiography (SE 75, IR 192)",

  bannerImage,

  introduction:
    "Radiography is a Non-Destructive Testing (NDT) technique that uses X-rays or gamma rays to inspect welds, pipelines, pressure vessels, storage tanks and other industrial components without causing damage. The radiation passes through the material and is captured on film or a digital detector, producing an image that reveals internal discontinuities, defects or variations in material thickness. This method is widely used across the oil & gas, petrochemical, power generation and construction industries.",

  sourcesTitle:
    "The following radiation sources are commonly used for industrial radiography:",

  sources: [
    "Iridium-192 (Ir-192)",
    "Selenium-75 (Se-75)",
    "Cobalt-60 (Co-60)",
    "X-Ray",
  ],

  typeOfJobsTitle: "Typical Applications",

  jobs: [
    "Pressure Vessel LS & CS Weld Joints",
    "Piping Welds of Various Sizes (LS & CS)",
    "Storage Tank Weld Joints",
    "Structural Steel Welds",
    "Castings & Forgings",
    "Flanges, Elbows and Other Pipe Fittings",
  ],

  gallery: [
    sourceImage1,
    sourceImage2,
  ],

  note:
    "GPTI provides both Conventional Radiography and Digital Radiography solutions to meet a wide range of industrial inspection requirements while ensuring high-quality imaging, reliability and compliance with international standards.",

  accordions: [
    {
      title: "Conventional Radiography",

      defaultOpen: true,

      content:
        "Conventional radiography uses industrial X-ray film to capture the radiation that passes through the test object. It produces a permanent physical record of the inspection and is widely used for weld quality evaluation and code compliance in various industries.",
    },

    {
      title: "Digital Radiography",

      defaultOpen: false,

      content:
        "Digital radiography uses flat-panel detectors or phosphor imaging plates instead of film. The captured images are available instantly, making inspection faster while improving image quality, storage, sharing and long-term record management.",
    },
  ],
};

export default radiographyData;