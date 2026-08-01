import bannerImage from "../assets/images/aboutPage/banner.jpg";

const contactData = {
  pageTitle: "Contact Us",

  bannerImage,

  intro: {
    title: "Let's Talk",
    subtitle:
      "We're here to help with inspection, testing and engineering solutions. Reach out to us for inquiries, quotations, technical support, or career opportunities.",
  },

  contactInfo: {
    companyName: "Gulf Pipe Line Testing & Inspection LLC",

    phoneNumbers: [
      "+971 6 568 2435",
      "+971 52 608 5790",
    ],

    email: "info@gptigroup.com",

    workingHours:
      "Monday to Saturday: 8:00 AM – 6:00 PM",

    address: {
      title: "Sharjah Head Office",
      line1: "P.O. Box: 73393",
      line2: "Shop #13, Baghlaf Al Zafeer Building",
      line3: "Industrial Area 18, Maliha Road",
      city: "Sharjah, UAE",
    },

    social: {
      linkedin:
        "https://www.linkedin.com/company/gulf-pipe-line-testing-inspection/",
    },
  },

  form: {
    companyPlaceholder: "Company Name",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Email Address",
    phonePlaceholder: "Phone Number",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Message",
    buttonText: "Send Message",
  },

  map: {
    embedUrl:
      "https://www.google.com/maps?q=Gulf+Pipe+Line+Testing+Inspection+Sharjah&output=embed",
  },
};

export default contactData;