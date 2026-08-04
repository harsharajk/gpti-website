import bannerImage from "../assets/images/aboutPage/banner.jpg";

import utImage1 from "../assets/images/ultrasonic-testing/ut1.jpg";
import utImage2 from "../assets/images/ultrasonic-testing/ut2.jpg";

const ultrasonicTestingData = {
  pageTitle: "Ultrasonic Testing",

  bannerImage,

  introduction:
    "Ultrasonic Testing (UT) is one of the most widely used Non-Destructive Testing (NDT) methods for detecting internal discontinuities, measuring material thickness and evaluating the integrity of components without causing damage. High-frequency sound waves are introduced into the material, and the reflected signals are analyzed to identify flaws such as cracks, lack of fusion, porosity, laminations and other defects. GPTI provides reliable ultrasonic inspection services using modern equipment and experienced personnel in accordance with international standards.",

  overviewTitle: "Where Ultrasonic Testing is Used",

  overview:
    "Ultrasonic Testing is suitable for inspecting welds, forgings, castings, plates, pressure vessels, storage tanks, pipelines, structural steel components and a wide range of industrial equipment. It provides accurate results while allowing inspections to be carried out with minimal disruption to operations.",

  applicationsTitle: "Typical Applications",

  applications: [
    "Pressure Vessel Weld Joints",
    "Piping Welds of Various Sizes",
    "Storage Tank Weld Joints",
    "Structural Steel Welds",
    "Castings and Forgings",
    "Flanges, Elbows and Pipe Fittings",
    "Oil & Gas Pipeline Inspection",
    "Thickness Measurement of Corroded Components",
  ],

  advantagesTitle: "Key Advantages",

  advantages: [
    "Detects internal and subsurface defects",
    "High inspection accuracy",
    "Immediate inspection results",
    "Portable equipment for field inspection",
    "No damage to the test component",
    "Suitable for thickness measurement",
  ],

  gallery: [
    utImage1,
    utImage2,
  ],

  note:
    "GPTI performs Ultrasonic Testing using qualified Level II and Level III inspectors while following internationally recognized inspection procedures to ensure reliable and accurate results.",

  accordions: [
    {
      title: "Ultrasonic Testing Capabilities",

      defaultOpen: true,

      content:
        "Our Ultrasonic Testing services include weld inspection, thickness measurement, corrosion monitoring, flaw detection and inspection of pressure vessels, pipelines, storage tanks, structural components, forgings and fabricated equipment using calibrated ultrasonic instruments.",
    },

    {
      title: "Standards & Quality",

      defaultOpen: false,

      content:
        "All inspections are performed in accordance with applicable international standards and client specifications by qualified personnel using calibrated equipment to ensure accuracy, repeatability and complete traceability of inspection results.",
    },
  ],
};

export default ultrasonicTestingData;