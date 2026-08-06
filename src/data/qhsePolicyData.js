import bannerImage from "../assets/images/aboutPage/banner.jpg";

import policyImage1 from "../assets/images/qhse-policy/qhse-policy-1.jpg";
import policyImage2 from "../assets/images/qhse-policy/qhse-policy-2.jpg";
import policyImage3 from "../assets/images/qhse-policy/qhse-policy-3.jpg";

const qhsePolicyData = {
  pageTitle: "QHSE Policy",

  bannerImage,

  introduction:
    "GPTI is committed to maintaining the highest standards of Quality, Health, Safety and Environmental (QHSE) performance throughout all its operations. Our management system is designed to protect employees, clients, contractors and the environment while delivering reliable inspection and testing services in accordance with applicable international standards and regulatory requirements.",

  overviewTitle: "Our QHSE Commitment",

  overview:
    "We believe that quality, occupational health, workplace safety and environmental responsibility are fundamental to sustainable business success. Through continual improvement, employee participation, risk assessment and compliance with international standards, GPTI strives to provide safe working conditions, protect the environment and consistently exceed customer expectations.",

  images: [
    {
      src: policyImage1,
      title: "Occupational Health, Safety & Environmental (OHSE) Policy",
    },
    {
      src: policyImage2,
      title: "No Smoking Policy",
    },
    {
      src: policyImage3,
      title: "Substance Abuse Policy",
    },
  ],

  note:
    "These policies reflect GPTI's commitment to maintaining a safe, healthy and environmentally responsible workplace while continually improving our Quality, Health, Safety and Environmental Management System across all operations.",

  accordions: [
    {
      title: "Quality Management",

      defaultOpen: true,

      content:
        "GPTI is committed to delivering inspection and testing services that consistently satisfy customer requirements while complying with applicable statutory, regulatory and international standards. Continuous improvement and customer satisfaction remain key objectives of our Quality Management System.",
    },

    {
      title: "Health & Safety",

      defaultOpen: false,

      content:
        "We are committed to preventing occupational injuries and illnesses by identifying hazards, assessing risks, providing appropriate training, promoting employee participation and ensuring safe working practices throughout all our operations.",
    },

    {
      title: "Environmental Responsibility",

      defaultOpen: false,

      content:
        "GPTI continuously works to minimize environmental impact by preventing pollution, reducing waste, complying with environmental regulations and encouraging responsible use of natural resources during all inspection and testing activities.",
    },
  ],
};

export default qhsePolicyData;