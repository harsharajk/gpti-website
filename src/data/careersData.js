import bannerImage from "../assets/images/aboutPage/banner.jpg";

const careersData = {
  pageTitle: "Careers",

  bannerImage,

  // Google Sheet CSV URL
  googleSheetUrl:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTELnZN7KaBr9jLtFwiVPK-fgp0GKALxhNxraWj1AfInDfishxWk80nmS3ldXADZTorNHsI3mhbzYBy/pub?output=csv",

  intro: {
    title: "Join Our Team",
    description:
      "At GPTI, we believe our people are our greatest strength. We are always looking for passionate, talented, and dedicated professionals who are committed to delivering excellence in inspection, testing, and engineering services. Join us and become part of a team that values integrity, innovation, safety, and continuous growth.",
  },

  whyWorkWithUs: [
    {
      title: "Safe Working Environment",
      description:
        "We prioritize the health, safety, and well-being of every employee.",
      icon: "shield",
    },
    {
      title: "Career Growth",
      description:
        "We encourage continuous learning and professional development.",
      icon: "growth",
    },
    {
      title: "International Projects",
      description:
        "Gain experience by working on diverse industrial projects.",
      icon: "globe",
    },
    {
      title: "Professional Team",
      description:
        "Work alongside experienced engineers and industry experts.",
      icon: "team",
    },
  ],

  contact: {
    title: "Didn't Find a Suitable Position?",
    description:
      "We are always interested in hearing from talented professionals. Send us your CV and we'll contact you when a suitable opportunity becomes available.",
    email: "hrkhere@gmail.com",
  },
};

export default careersData;