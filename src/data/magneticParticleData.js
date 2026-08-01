import bannerImage from "../assets/images/aboutPage/banner.jpg";

import magneticParticleImage from "../assets/images/magnetic-particle/magnetic-particle.jpg";
import liquidPenetrantImage from "../assets/images/magnetic-particle/liquid-penetrant.jpg";

const magneticParticleData = {
  pageTitle: "Magnetic Particle / Dye Penetrant Inspections",

  bannerImage,

  introduction:
    "Magnetic Particle Inspection (MPI) and Liquid Penetrant Inspection (LPI) are conventional Non-Destructive Testing (NDT) methods used to detect surface and near-surface discontinuities in materials. These inspection techniques are widely used across fabrication, construction and maintenance industries to ensure weld quality and structural integrity.",

  magneticParticle: {
    title: "Magnetic Particle Inspection",

    image: magneticParticleImage,

    description:
      "The magnetic field can be introduced into the test specimen by either direct or indirect magnetization. Direct magnetization occurs when electric current passes through the test object and creates a magnetic field within the material. Indirect magnetization is achieved by applying an external magnetic field. Surface and near-surface discontinuities disturb the magnetic field, causing magnetic particles to gather around the defect and make it clearly visible.",

    methodsTitle: "Inspection Methods",

    methods: [
      "Wet Continuous Method by AC/DC Yoke",
      "Wet Continuous Method by Permanent Magnet",
      "Fluorescent Magnetic Particle Inspection",
      "MPI by Dry Powder Technique",
      "MPI by Prod Method",
    ],

    jobsTitle: "Type of Jobs",

    jobs: [
      "Pressure Vessels",
      "Piping Various Sizes",
      "Storage Tanks",
      "Structural Welding",
      "Castings & Forgings",
      "Flanges, Elbows and Other Fittings",
    ],
  },

  liquidPenetrant: {
    title: "Liquid Penetrant Inspection",

    image: liquidPenetrantImage,

    description:
      "Liquid Penetrant Inspection uses either a visible red dye or fluorescent penetrant to reveal surface-breaking discontinuities in non-porous materials. The penetrant is applied to a clean surface, allowed to dwell, then removed before applying a developer that draws the penetrant out of defects, making indications clearly visible.",

    methodsTitle: "Inspection Methods",

    methods: [
      "Solvent Removable Method",
      "Water Washable Method",
      "Fluorescent Penetrant Inspection",
    ],

    jobsTitle: "Type of Jobs",

    jobs: [
      "Pressure Vessels",
      "Piping Various Sizes",
      "Storage Tanks",
      "Structural Welding",
      "Castings & Forgings",
      "Flanges, Elbows and Other Fittings",
    ],
  },

  note:
    "Both Magnetic Particle Inspection (MPI) and Liquid Penetrant Inspection (LPI) are widely used for detecting surface defects and are essential conventional NDT techniques for quality assurance.",

  accordions: [
    {
      title: "Magnetic Particle Inspection",

      defaultOpen: true,

      content:
        "Magnetic Particle Inspection is suitable for ferromagnetic materials and is capable of detecting both surface and slightly subsurface discontinuities quickly and efficiently.",

    },

    {
      title: "Liquid Penetrant Inspection",

      defaultOpen: false,

      content:
        "Liquid Penetrant Inspection is applicable to both ferrous and non-ferrous materials and is especially effective for detecting fine surface cracks and discontinuities that are open to the surface.",

    },
  ],
};

export default magneticParticleData;