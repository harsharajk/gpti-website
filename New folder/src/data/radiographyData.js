import bannerImage from "../assets/images/aboutPage/banner.jpg";

import heroImage from "../assets/images/radiography/hero.jpg";
import sourceImage1 from "../assets/images/radiography/source1.jpg";
import sourceImage2 from "../assets/images/radiography/source2.jpg";

const radiographyData = {
  pageTitle: "Gamma and X-Ray Radiography (SE 75, IR 192)",

  bannerImage,

  heroImage,

  introduction:
    "Radiography is a type of Non Destructive Examination technique that uses radiation (either X-rays or gamma rays) to inspect various types of equipment. It is extensively used in industrial facilities. Radiography works by using a device to emit radiation at a piece of equipment. Some of the radiation passes through the equipment and is captured on the film placed on the other side. This creates an image that can show signs of possible flaws or damage in the equipment.",

  sourcesTitle:
    "The following sources are normally used for Radiography:",

  sources: [
    "IR 192 Isotope",
    "Selenium SE-75 Isotope",
    "Cobalt 60",
    "X-ray",
  ],

  typeOfJobsTitle: "Type of Jobs",

  jobs: [
    "Pressure Vessels LS & CS Joints",
    "Piping Various Sizes LS & CS Joints",
    "Storage Tank LS & CS Joints",
    "Structural Welding",
    "Castings & Forgings",
    "Flange, Elbows and other Fittings",
  ],

  gallery: [
    sourceImage1,
    sourceImage2,
  ],

  note:
    "There are two main kinds of Radiography: Conventional Radiography and Digital Radiography.",

  accordions: [
    {
      title: "Conventional Radiography",

      defaultOpen: true,

      content:
        "Conventional radiography inspection works by using a special film that reacts to the radiation passing through the equipment, creating the picture to be examined. Because the radiation is captured on film as part of the process, conventional radiography always provides a permanent, physical record of the test results.",
    },

    {
      title: "Digital Radiography",

      defaultOpen: false,

      content:
        "Digital radiography uses a phosphor screen or flat panel containing micro-electronic sensors to capture the radiation rather than film. The resulting image is stored digitally instead of on film. Digital radiographs tend to be easier to store and show less image degradation.",
    },
  ],
};

export default radiographyData;