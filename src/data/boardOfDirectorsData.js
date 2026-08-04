import bannerImage from "../assets/images/aboutPage/banner.jpg";

import vineethImage from "../assets/images/board-of-directors/vineeth-r-devadiga.jpg";
import amareshImage from "../assets/images/board-of-directors/amaresh-majumder.jpg";
import santanuImage from "../assets/images/board-of-directors/santanu-saha.jpg";

const boardOfDirectorsData = {
  pageTitle: "Board of Directors",

  bannerImage,

  introduction:
    "GPTI is led by a team of experienced professionals with decades of expertise in Non-Destructive Testing (NDT), Quality Assurance, Inspection Services, and Asset Integrity Management. Their combined knowledge and leadership have been instrumental in delivering reliable inspection solutions across the Oil & Gas, Petrochemical, Power, Marine, and Infrastructure sectors.",

  directors: [
    {
      id: 1,

      name: "Vineeth R Devadiga",

      designation: "Managing Director",

      image: vineethImage,

      shortDescription:
        "More than 27 years of experience in Inspection, Quality Control and Non-Destructive Testing across Oil & Gas, Petrochemical, Power and Marine industries.",

      biography: `
Mr. Vineeth Devadiga has more than 27 years of vast experience in the construction industry with hands-on expertise in Inspection, Quality Control and Non-Destructive Testing of FPSO, Topside Process Modules, MOPU, Pressure Vessels, Heat Exchangers, Piping and Structures for Petrochemical Plants, Power Plants, Storage Tanks, Cross-Country Pipelines, Offshore Platforms and various Offshore and Onshore Drilling Rigs.

After spending a few years in India on turnkey projects, he moved to the UAE and worked with major NDT companies including SGS and INSPEC before joining Lamprell Energy Ltd on turnkey projects for the Oil & Gas, Energy and Marine industries.

He is certified to CSWIP 3.1 & 3.2 and ASNT Level III in UT & MT. He is well versed with international codes, standards and specifications including AWS D1.1, API, ASME, BS, TEMA, EMMUA, ABS Rules, DNV Rules and Lloyd's Register Rules.
      `,
    },

    {
      id: 2,

      name: "Amaresh Majumder",

      designation: "Operations Director",

      image: amareshImage,

      shortDescription:
        "More than 25 years of experience in Conventional and Advanced NDT methods across multiple industrial sectors.",

      biography: `
Mr. Amaresh Majumder has more than 25 years of extensive experience in Conventional and Advanced Non-Destructive Testing within the Oilfield, Chemical, Power Stations, Steel Plants, Processing Plants, Oil Refineries and Petrochemical industries.

He is certified as ISO 9712/PCN Level III in RT, PT, MT, UT, ToFD and Phased Array from BINDT (UK) and ASNT NDT Level III in RT, UT, MT and PT from ASNT (USA).

He also holds certifications in Ultrasonic Guided Wave Level II (TWI, UK), Thermography Level I (FLIR), Radiography Safety Site In-Charge (BARC), CSWIP 3.1 and BGAS-CSWIP Painting Inspector.

He has extensive experience in NDT training, certification, procedure development, technical seminars and consultancy for clients, manufacturers and inspection organizations.
      `,
    },

    {
      id: 3,

      name: "Santanu Saha",

      designation: "Technical & HSEQ Director",

      image: santanuImage,

      shortDescription:
        "More than 30 years of experience in Conventional and Advanced NDT, Technical Inspection and HSEQ Management.",

      biography: `
Mr. Santanu Saha has more than 30 years of vast experience in Conventional and Advanced NDT methods in the Oilfield, Chemical, Power Stations, Steel Plants, Processing Plants, Oil Refineries and Petrochemical industries.

He is certified as API Lead Auditor & Practitioner, ISO Lead Auditor (9001, 14001 & 45001), ISO 9712/PCN Level III in RT, PT, MT and UT, ToFD & Phased Array from BINDT (UK), ASNT Level III in RT, UT, MT, LT, PT, AE, ET, IR & VT and ISNT Level III in UT & RT.

He is also certified in API Plant Inspection (API 653, API 570, API 510 & API 580), IWS (International Welding Specialist), CSWIP 3.2.2 Senior Welding Inspector and several other internationally recognized qualifications.

His expertise includes technical leadership, inspection procedure development, advanced NDT implementation, client consultancy, certification training and publishing technical papers on NDT applications.
      `,
    },
  ],
};

export default boardOfDirectorsData;