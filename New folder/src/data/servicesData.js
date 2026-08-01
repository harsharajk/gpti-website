import gammaRadiography from "../assets/images/services/gamma-radiography.jpg";
import magneticParticle from "../assets/images/services/magnetic-particle.jpg";
import ultrasonicTesting from "../assets/images/services/ultrasonic-testing.jpg";
import holidayTesting from "../assets/images/services/holiday-testing.jpg";
import vacuumBoxTesting from "../assets/images/services/vacuum-box-testing.jpg";
import hardnessTesting from "../assets/images/services/hardness-testing.jpg";
import phasedArrayTofd from "../assets/images/services/phased-array-tofd.jpg";
import boroscopicInspection from "../assets/images/services/boroscopic-inspection.jpg";
import ferriteTesting from "../assets/images/services/ferrite-testing.jpg";
import rtFilmDigitization from "../assets/images/services/rt-film-digitization.jpg";
import tubeInspection from "../assets/images/services/tube-inspection.jpg";
import longRangeUltrasonicTesting from "../assets/images/services/long-range-ultrasonic-testing.jpg";
import weldingInspection from "../assets/images/services/welding-inspection.jpg";
import civilInspection from "../assets/images/services/civil-inspection.jpg";
import paintingCoatingInspection from "../assets/images/services/painting-coating-inspection.jpg";
import eIIqcHseOfficer from "../assets/images/services/e-i-iqc-hse-officer.jpg";
import thirdPartyVendorInspection from "../assets/images/services/third-party-vendor-inspection.jpg";
import apiInspectionService from "../assets/images/services/api-inspection-service.jpg";
import projectResidentInspectors from "../assets/images/services/project-resident-inspectors.jpg";
import wpsPqrWelderQualification from "../assets/images/services/wps-pqr-welder-qualification.jpg";
import riskBasedAssetIntegrity from "../assets/images/services/risk-based-asset-integrity.jpg";
import infraredThermographicInspection from "../assets/images/services/infrared-thermographic-inspection.jpg";
import heatTreatment from "../assets/images/services/heat-treatment.jpg";
import trainingCertification from "../assets/images/services/training-certification.jpg";
import ndtLevelIIIConsultancy from "../assets/images/services/ndt-level-iii-consultancy.jpg";

const servicesData = [

    {
        id: 1,
        title: "Gamma and X-Ray Radiography",
        image: gammaRadiography,
        description:
            "Radiography is a type of Non Destructive Examination technique that uses radiation (either x-rays or gamma rays) to inspect various types of equipment.",
        path: "/services/gamma-radiography",
    },

    {
        id: 2,
        title: "Magnetic Particle / Dye Penetrant Inspections",
        image: magneticParticle,
        description:
            "The particular penetrant liquid, usually a red dye or a fluorescent dye when using a black light, is applied to generally non-ferrous materials.",
        path: "/services/magnetic-particle",
    },

    {
        id: 3,
        title: "Ultrasonic Testing",
        image: ultrasonicTesting,
        description:
            "Ultrasonic Testing (UT) is a conventional NDT technique that can be used to obtain thickness measurements of materials and detect defects in welds, castings and wrought products.",
        path: "/services/ultrasonic-testing",
    },

    {
        id: 4,
        title: "Holiday Testing",
        image: holidayTesting,
        description:
            "A holiday test is an inspection method used to detect discontinuities in painted/coated surfaces using specialized tools and equipment.",
        path: "/services/holiday-testing",
    },

    {
        id: 5,
        title: "Vacuum Box Testing",
        image: vacuumBoxTesting,
        description:
            "Vacuum box testing is used to examine small and specific areas for defects, flaws, leaks or other imperfections.",
        path: "/services/vacuum-box-testing",
    },

    {
        id: 6,
        title: "Hardness Testing",
        image: hardnessTesting,
        description:
            "Testing the hardness of materials is one of the oldest measuring techniques in material testing and it is probably one of the most frequently applied measuring techniques.",
        path: "/services/hardness-testing",
    },

    {
        id: 7,
        title: "Phased Array / TOFD",
        image: phasedArrayTofd,
        description:
            "Phased Array Ultrasonic Testing (PAUT), also known as Phased Array UT, is an advanced non-destructive inspection technique that uses a set of Ultrasonic Testing (UT).",
        path: "/services/phased-array-tofd",
    },

    {
        id: 8,
        title: "Boroscopic Inspection",
        image: boroscopicInspection,
        description:
            "An all-in-one system that includes everything necessary for complex inspection tasks. All functions can be controlled from a single handheld remote control unit.",
        path: "/services/boroscopic-inspection",
    },

    {
        id: 9,
        title: "Ferrite Testing",
        image: ferriteTesting,
        description:
            "The rugged Feritscope® FMP30 with plug-in type smart probe is suited for fast, non-destructive and accurate measurement of ferrite content on-site.",
        path: "/services/ferrite-testing",
    },

    {
        id: 10,
        title: "RT Film Digitization",
        image: rtFilmDigitization,
        description:
            "Film Digitization is the combination of radiography with the application of information technology that has led to the digitization of radiographs.",
        path: "/services/rt-film-digitization",
    },

    {
        id: 11,
        title: "Tube Inspection",
        image: tubeInspection,
        description:
            "Eddy current testing uses electromagnetic induction to identify defects in tubing. A probe is inserted into the tube and pushed through the entire length of the tube.",
        path: "/services/tube-inspection",
    },

    {
        id: 12,
        title: "Long Range Ultrasonic Testing",
        image: longRangeUltrasonicTesting,
        description:
            "Long-Range Ultrasonic Testing (LRUT) is an advanced Non-Destructive Testing method. Wavemaker3 is a proven, state-of-the-art pipe screening system.",
        path: "/services/long-range-ultrasonic-testing",
    },

    {
        id: 13,
        title: "Welding Inspection",
        image: weldingInspection,
        description:
            "The majority of our clients employ welding inspectors on a full-time basis, but from time to time during major pipeline or plant construction.",
        path: "/services/welding-inspection",
    },

    {
        id: 14,
        title: "Civil Inspection",
        image: civilInspection,
        description:
            "All our inspectors are well trained and certified to understand the relevant code, standards, specification acceptance criteria and analyze the end result for acceptance.",
        path: "/services/civil-inspection",
    },

    {
        id: 15,
        title: "Painting & Coating Inspection",
        image: paintingCoatingInspection,
        description:
            "Coating inspection for all sectors of the industry on-shore, offshore and marine is governed by the applicable codes, standards, specification and contract documents.",
        path: "/services/painting-coating-inspection",
    },

    {
        id: 16,
        title: "E & I IQC, HSE Officer",
        image: eIIqcHseOfficer,
        description:
            "GPTI Inspectors assigned to carry out inspection shall be certified as a minimum to CompEx Certification when required by the contract document with relevant experience.",
        path: "/services/e-i-iqc-hse-officer",
    },

    {
        id: 17,
        title: "Third Party Inspection / Vendor Inspection",
        image: thirdPartyVendorInspection,
        description:
            "GPTI have inspectors who are well experienced, knowledgeable and specially trained individuals, knowledgeable in the relevant rules, specifications, codes and standards.",
        path: "/services/third-party-vendor-inspection",
    },

    {
        id: 18,
        title: "API Inspection Service",
        image: apiInspectionService,
        description:
            "API related inspection requires specialized inspectors. Our API certified inspectors are experienced in Pressure Vessels, Process Pipelines and Above-Ground Storage Tanks.",
        path: "/services/api-inspection-service",
    },

    {
        id: 19,
        title: "Project Resident Inspectors / Expeditors",
        image: projectResidentInspectors,
        description:
            "GPTI provides well qualified, competent and experienced multidisciplinary inspectors capable of meeting contractual requirements and supporting projects as resident inspectors or expeditors.",
        path: "/services/project-resident-inspectors",
    },

    {
        id: 20,
        title: "WPS, PQR and Welder Qualification Testing",
        image: wpsPqrWelderQualification,
        description:
            "One of the most critical activities in the construction industry may be infrastructure, on-shore, off-shore or marine welding for new-build and MRO (Maintenance and Repair Operations).",
        path: "/services/wps-pqr-welder-qualification",
    },

    {
        id: 21,
        title: "Risk Based / Asset Integrity Inspection Service",
        image: riskBasedAssetIntegrity,
        description:
            "Risk-Based Inspection (RBI) is an optimal maintenance business process used to examine equipment such as pressure vessels, heat exchangers, tanks and piping in industrial plants.",
        path: "/services/risk-based-asset-integrity",
    },

    {
        id: 22,
        title: "Infrared Thermographic Inspection",
        image: infraredThermographicInspection,
        description:
            "Infrared Thermography is a non-contact, non-destructive testing technique that detects and visualizes temperature differences to identify electrical, mechanical and process-related issues.",
        path: "/services/infrared-thermographic-inspection",
    },

    {
        id: 23,
        title: "Heat Treatment (Furnace / Local)",
        image: heatTreatment,
        description:
            "Heat treatment is a controlled process of heating and cooling materials to alter their physical and mechanical properties without changing the product shape.",
        path: "/services/heat-treatment",
    },

    {
        id: 24,
        title: "Training and Certification Services",
        image: trainingCertification,
        description:
            "GPTI provides professional training and certification programs for NDT personnel and other technical disciplines in accordance with internationally recognized standards.",
        path: "/services/training-certification",
    },

    {
        id: 25,
        title: "NDT Level III Consultancy",
        image: ndtLevelIIIConsultancy,
        description:
            "Our NDT Level III consultants provide technical guidance, procedure qualification, auditing, personnel certification support and advanced inspection consultancy services.",
        path: "/services/ndt-level-iii-consultancy",
    },

];

export default servicesData;