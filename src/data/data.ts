import owayLogo from "../data/images/oway.jpeg";
import MyintThawTarLogo from "../data/images/myint_thawtar_clinic.jpg";
import grandHanthaLogo from "../data/images/grand_hantha.png";
import northOkkalarLogo from "@/data/images/uom2-logo.png";
import { Icons } from "../components/icons";

export const contactLinks = [
  {
    title: "Phone",
    icon: Icons.phone,
    color: "bg-green-500 from-green-400 to-green-700",
    href: "tel:+959450035935",
    colSpan: "col-span-2",
  },
  {
    title: "Facebook",
    icon: Icons.facebook,
    href: "https://www.facebook.com/share/1FrgjEnoKb/?mibextid=wwXIfr",
    color: "bg-blue-600 from-blue-500 to-blue-700",
  },
  {
    title: "LinkedIn",
    icon: Icons.linkedin,
    color: "bg-sky-500 from-sky-400 to-sky-600",
    href: "https://mm.linkedin.com/in/nyan-linn-tun-68270575",
    single: true,
  },

  {
    title: "Email",
    icon: Icons.mail,
    color: "bg-red-400 from-red-300 to-red-500",
    href: "mailto:khaingpyaeaye@gmail.com",
    colSpan: "col-span-2",
  },
];

export const experiences = [
  {
    title: "Diabetes Educator",
    company: "Grand Hantha International Hospital",
    period: "2023 - present ( full time )",
    logo: grandHanthaLogo,
    description: [
      "Educate and counsel patients on diabetes management, medication adherence, diet, and lifestyle improvement.",
      "Coordinate patient schedules, appointments, and follow-ups to ensure effective care delivery.",
      "Assist the Professor Doctor with clinical, academic, and administrative tasks, including meeting coordination and documentation.",
      "Maintain accurate patient records, reports, and correspondence with confidentiality and professionalism.",
      "Support medical research activities and communication between patients, doctors, and hospital departments.",
    ],
    // "Educate and support patients with diabetes, providing guidance on treatment plans and lifestyle management.Manage schedules, appointments, and administrative tasks for the professor doctor. Coordinate meetings, travel arrangements, and documentation for clinical and academic activities.",
    website: "https://grandhantha.com/",
  },
  {
    title: "Senior Accountant",
    company: "Myint Thaw Tar Clinic",
    period: "2024 - present ( part time )",
    logo: MyintThawTarLogo,
    description: [
      "Manage daily financial operations including income recording, expense tracking, and bank reconciliation.",
      "Prepare financial statements and maintain accurate accounting records.",
      "Oversee inventory and ensure compliance with accounting procedures.",
      "Support management with financial planning and performance analysis.",
    ],

    website: "https://www.myanmaryp.com/company/7193/Myint_Thaw_Dar",
  },
  {
    title: "Senior Executive (Business Intelligence Analyst)",
    company: "Oway Travel & Tour",
    period: "2018 - 2020 ( full time )",
    logo: owayLogo,
    description: [
      "Designed and maintained interactive dashboards using Power BI and Advanced Excel to visualize KPIs and business performance.",
      "Analyzed large datasets to identify sales trends, top-performing routes, and customer behavior patterns.",
      "Collaborated with cross-functional teams to translate analytical findings into strategic business decisions.",
      "Automated recurring reports using Excel formulas, pivot tables, and macros, reducing manual workload and improving data accuracy.",
      "Utilized SQL queries and BI tools to extract and validate data from multiple sources for executive reporting.",
    ],

    website: "https://oway.com.mm",
  },
  {
    title: "Data Analyst (MIS Department)",
    company: "Oway Travel & Tour",
    period: "2016 - 2018 ( full time )",
    logo: owayLogo,
    description: [
      "Collected, cleaned, and transformed large data sets for business reporting using Excel and SQL-based tools.",
      "Created automated Excel dashboards to track daily, weekly, and monthly sales and revenue metrics.",
      "Performed data analysis on marketing and customer engagement data from Firebase, Facebook, Google Analytics, iOS, and Android platforms.",
      "Collaborated with the operations and management teams to deliver accurate insights for data-driven planning.",
      "Developed custom B2B and corporate reports, ensuring high data accuracy and timely delivery to stakeholders.",
    ],

    website: "https://oway.com.mm",
  },
  {
    title: "Accountant & Personal Assistant",
    company: "North Okkalapa General Hospital ,University of Medicine 2",
    period: "2011 - 2015 ( full time )",
    logo: northOkkalarLogo,
    description: [
      "Provided comprehensive administrative and accounting support to the Head of Medicine & Endocrinology Department.",
      "Prepared financial records, expense reports, and managed pharmaceutical inventory with accuracy and confidentiality.",
      "Organized and maintained personal and professional schedules, coordinated meetings, and arranged travel logistics.",
      "Created presentations and reports using Microsoft Excel and PowerPoint for academic and clinical use.",
      "Liaised with hospital departments, students, and external organizations to ensure smooth communication and workflow.",
      "Supported departmental budgeting, procurement, and documentation processes in compliance with hospital policies.",
    ],

    website: "https://um2ygn.edu.mm/northokkalapa-general-hospital/",
  },
];

export const skills = [
  {
    category: "Accounting & Finance",
    items: [
      {
        name: "Financial Reporting",
        icon: Icons.chartBar,
        color: "bg-blue-400",
      },
      {
        name: "Budgeting & Forecasting",
        icon: Icons.pieChart,
        color: "bg-purple-400",
      },
      { name: "Tax Planning", icon: Icons.wallet, color: "bg-amber-400" },
      { name: "Auditing", icon: Icons.clipboardCheck, color: "bg-green-400" },
    ],
  },
  {
    category: "Business & Management",
    items: [
      { name: "Sales Strategy", icon: Icons.trendingUp, color: "bg-rose-400" },
      { name: "Cost Control", icon: Icons.calculator, color: "bg-orange-400" },
      {
        name: "Inventory Management",
        icon: Icons.package,
        color: "bg-cyan-400",
      },
      { name: "Team Leadership", icon: Icons.users, color: "bg-indigo-400" },
    ],
  },
  {
    category: "Software & Tools",
    items: [
      {
        name: "Microsoft Excel",
        icon: Icons.fileSpreadsheet,
        color: "bg-green-400",
      },
      { name: "SAP / ERP", icon: Icons.database, color: "bg-teal-400" },
      { name: "QuickBooks", icon: Icons.bookOpen, color: "bg-sky-400" },
      { name: "Power BI", icon: Icons.barChart, color: "bg-yellow-400" },
    ],
  },
];

export const educations = [
  {
    title: "Bachelor of Science (Physics)",
    edu_name: "University of East Yangon",
    period: "2003 - 2008",
    description:
      "Developed a solid foundation in analytical thinking, experimental design, and scientific problem-solving through core physics courses and research projects.",
    // tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    image:
      "https://lh4.googleusercontent.com/proxy/1UeIklRFh4u7Ny_p3SD3WPxw2r0_vjM_05n2zFzqvYju2Uk9oaCp2uGIvEjvaQwzw_V_s1PbFklhs9UVRlUvmacuVtZWyqdyASU",
    link: "https://example.com/dashboard",
  },
  {
    title: "LCCI Diploma UK",
    edu_name: "London Chamber of Commerce and Industry - LCCI",

    period: "2005 - 2006",
    description:
      "L.C.C.I Examinations Board,Group Diploma in Accounting (Level 3), Diploma in Computerized Accounting (Level 3)",
    // tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    image:
      "data:image/png;base64,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",
    link: "https://www.londonchamber.co.uk/",
  },
];
