import bannerImage from "../assets/images/aboutPage/banner.jpg";

/* ===================================
   Safety Awards
=================================== */

import safetyCover from "../assets/images/gallery/safety-awards/cover.jpg";

import safety1 from "../assets/images/gallery/safety-awards/1.jpg";
import safety2 from "../assets/images/gallery/safety-awards/2.jpg";
import safety3 from "../assets/images/gallery/safety-awards/3.jpg";
import safety4 from "../assets/images/gallery/safety-awards/4.jpg";
import safety5 from "../assets/images/gallery/safety-awards/5.jpg";

/* ===================================
   Events 2022
=================================== */

import events2022Cover from "../assets/images/gallery/events-2022/cover.jpg";

import event2022_1 from "../assets/images/gallery/events-2022/1.jpg";
import event2022_2 from "../assets/images/gallery/events-2022/2.jpg";
import event2022_3 from "../assets/images/gallery/events-2022/3.jpg";
import event2022_4 from "../assets/images/gallery/events-2022/4.jpg";
import event2022_5 from "../assets/images/gallery/events-2022/5.jpg";
import event2022_6 from "../assets/images/gallery/events-2022/6.jpg";
import event2022_7 from "../assets/images/gallery/events-2022/7.jpg";
import event2022_8 from "../assets/images/gallery/events-2022/8.jpg";
import event2022_9 from "../assets/images/gallery/events-2022/9.jpg";
import event2022_10 from "../assets/images/gallery/events-2022/10.jpg";
import event2022_11 from "../assets/images/gallery/events-2022/11.jpg";
import event2022_12 from "../assets/images/gallery/events-2022/12.jpg";
import event2022_13 from "../assets/images/gallery/events-2022/13.jpg";
import event2022_14 from "../assets/images/gallery/events-2022/14.jpg";
import event2022_15 from "../assets/images/gallery/events-2022/15.jpg";

/* ===================================
   Contractor Award
=================================== */

import contractorCover from "../assets/images/gallery/contractor-award/cover.jpg";

import contractor1 from "../assets/images/gallery/contractor-award/1.jpg";

const galleryData = {
  pageTitle: "Photo Gallery",

  bannerImage,

  // ==========================
  // Latest Event
  // ==========================

  featuredEvent: {
    id: 1,

    slug: "contractor-excellence-award",

    title: "Contractor Excellence Award",

    date: "Latest Event",

    description:
      "Photographs from the Contractor Excellence Award ceremony celebrating exceptional performance and achievements.",

    coverImage: contractorCover,

    images: [
      contractor1,
    ],
  },

  // ==========================
  // Previous Events
  // ==========================

  recentEvents: [
    {
      id: 2,

      slug: "events-2022",

      title: "Events - 2022",

      date: "2022",

      description:
        "Highlights from various company activities and events held throughout 2022.",

      coverImage: events2022Cover,

      images: [
        event2022_1,
        event2022_2,
        event2022_3,
        event2022_4,
        event2022_5,
        event2022_6,
        event2022_7,
        event2022_8,
        event2022_9,
        event2022_10,
        event2022_11,
        event2022_12,
        event2022_13,
        event2022_14,
        event2022_15,
      ],
    },

    {
      id: 3,

      slug: "safety-security-appreciation-awards",

      title: "Safety & Security Appreciation Awards",

      date: "Previous Event",

      description:
        "A collection of photographs from GPTI's Safety & Security Appreciation Awards, recognizing outstanding commitment to workplace safety and operational excellence.",

      coverImage: safetyCover,

      images: [
        safety1,
        safety2,
        safety3,
        safety4,
        safety5,
      ],
    },
  ],
};

export default galleryData;