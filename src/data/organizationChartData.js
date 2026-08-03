import bannerImage from "../assets/images/aboutPage/banner.jpg";

const organizationChartData = {
  pageTitle: "Organization Chart",

  bannerImage,

  hierarchy: {
    title: "Managing Director",
    name: "Vineeth R Devadiga",

    children: [
      {
        title: "Technical + HSED Director",
        name: "Santanu Saha",

        children: [
          {
            title: "Technical Manager",
            name: "Jaijo Varghese",

            children: [
              {
                title: "Technical Department",
                name: "",
              },
            ],
          },

          {
            title: "HSE Team Leader + Sr. RPD",
            name: "",

            children: [
              {
                title: "RSO / Site Co-Ordinator",
                name: "",
              },
              {
                title: "HSE + RPD",
                name: "",
              },
            ],
          },

          {
            title: "QA/QC In-Charge",
            name: "Sai Prasad",

            children: [
              {
                title: "QC Inspectors",
                name: "",
              },
            ],
          },
        ],
      },

      {
        title: "Operations Director",
        name: "Amaresh Majumder",

        children: [
          {
            title: "Business Relationship Manager",
            name: "Rajkumar Sharma",
          },

          {
            title: "Projects",
            name: "Angshuman",
          },

          {
            title: "Advance NDT Supervisor",
            name: "Kulanand Jaishi",

            children: [
              {
                title: "Advance NDT Technicians",
                name: "",
              },
            ],
          },

          {
            title: "Operations Supervisor",
            name: "",

            children: [
              {
                title: "Stores In-Charge",
                name: "King & Sudeep",
              },

              {
                title: "Operations Co-Ordinator - SHJ",
                name: "",

                children: [
                  {
                    title: "RT + Multi Technicians (SHJ)",
                    name: "",
                  },
                  {
                    title: "Drivers (SHJ)",
                    name: "",
                  },
                ],
              },

              {
                title: "Operations Co-Ordinator - DXB",
                name: "",

                children: [
                  {
                    title: "RT + Multi Technicians (DXB)",
                    name: "",
                  },
                  {
                    title: "Drivers (DXB)",
                    name: "",
                  },
                ],
              },

              {
                title: "Operations Co-Ordinator - AUH",
                name: "",

                children: [
                  {
                    title: "RT + Multi Technicians (AUH)",
                    name: "",
                  },
                  {
                    title: "Drivers (AUH)",
                    name: "",
                  },
                ],
              },
            ],
          },

          {
            title: "HR",
            name: "Girish Kumaya",

            children: [
              {
                title: "Administration",
                name: "Kheman Thapa",

                children: [
                  {
                    title: "Administration",
                    name: "Mohammad Ansif",
                  },
                  {
                    title: "Administration",
                    name: "Akash Anand",
                  },
                ],
              },
            ],
          },
        ],
      },

     
      {
        title: "Secretary",
        name: "Shripad Vedanti",
        },

      {
        title: "IT Administrator",
        name: "Ashok M J",

        children: [
          {
            title: "IT Assistant - Software Development",
            name: "Harsha Raj K",
          },
        ],
      },

      {
        title: "Finance Department",
        name: "",

        children: [
          {
            title: "Accountant",
            name: "Dhanush Shetty",

            children: [
              {
                title: "Assistant Accountant",
                name: "Pritwish Alva",
              },
            ],
          },
        ],
      },

      {
        title: "CBI In-Charge",
        name: "Rajan",

        children: [
          {
            title: "CBI Supervisor",
            name: "Krishnanunni",

            children: [
              {
                title: "CBI Technicians",
                name: "",
              },
            ],
          },
        ],
      },

      {
        title: "PWHT In-Charge",
        name: "P Bhagat",

        children: [
          {
            title: "PWHT Supervisor",
            name: "Badrinath",

            children: [
              {
                title: "PWHT Technicians",
                name: "",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default organizationChartData;