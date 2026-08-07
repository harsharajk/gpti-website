import bannerImage from "../assets/images/aboutPage/banner.jpg";

/* ===================================
   Certificate Images
=================================== */

import certificate1Image from "../assets/images/certificates/certificate-1.jpg";
import certificate2Image from "../assets/images/certificates/certificate-2.jpg";
import certificate3Image from "../assets/images/certificates/certificate-3.jpg";
import certificate4Image from "../assets/images/certificates/certificate-4.jpg";
import certificate5Image from "../assets/images/certificates/certificate-5.jpg";
import certificate6Image from "../assets/images/certificates/certificate-6.jpg";
import certificate7Image from "../assets/images/certificates/certificate-7.jpg";

/* ===================================
   Certificate PDF
=================================== */

import certificate10Pdf from "../assets/pdfs/certificates/certificate-10.pdf";
import certificate10Thumbnail from "../assets/images/certificates/certificate-10-thumbnail.jpg";

const certificatesData = {
  pageTitle: "Certificates",

  bannerImage,

  introduction:
    "GPTI maintains internationally recognized certifications and accreditations demonstrating our commitment to quality, safety, technical competence and continual improvement. Click any certificate to view it in full size.",

  certificates: [
    {
      id: 1,
      title: "Certificate of Excellence",
      image: certificate1Image,
    },
    {
      id: 2,
      title: "ISO 9001:2015",
      image: certificate2Image,
    },
    {
      id: 3,
      title: "ISO 14001:2015",
      image: certificate3Image,
    },
    {
      id: 4,
      title: "ISO 45001:2018",
      image: certificate4Image,
    },
    {
      id: 5,
      title: "Certificate of Appreciation",
      image: certificate5Image,
    },
    {
      id: 6,
      title: "Certificate of Appreciation",
      image: certificate6Image,
    },
    {
      id: 7,
      title: "Certificate of Appreciation",
      image: certificate7Image,
    },
    {
        id: 8,
        title: "Accreditation Certificate ",
        image: certificate10Thumbnail,
        pdf: certificate10Pdf,
    },
  ],
};

export default certificatesData;