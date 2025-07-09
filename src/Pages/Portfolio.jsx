/* eslint-disable react/prop-types */
import { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/ProjectCard";
import Certificate from "../components/Certificate";
import { Code, Award } from "lucide-react";
import { useEffect } from "react";

const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 ease-in-out flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 hover:border-white/20 backdrop-blur-sm group relative overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-300 ${
          isShowingMore
            ? "group-hover:-translate-y-0.5"
            : "group-hover:translate-y-0.5"
        }`}
      >
        <polyline
          points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}
        ></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const projects = [
  {
    id: 1,
    Img: "portfolio.PNG",
    Title: "My Portfolio",
    Description:
      "This is my personal portfolio website, built with ReactJS. It highlights my skills, projects, and experiences while offering a smooth, interactive experience. With a responsive design and modern animations, the site ensures seamless navigation and an engaging user interface. You can also easily get in touch with me through the contact page.",
    Features: [
      "A beautiful landing page to greet you.",
      "Works perfectly on both mobile and desktop.",
      "Using Framer Motion and AOS for engaging transitions.",
      " Designed with Material UI and styled with Tailwind CSS.",
      "Managed by React Router for easy page transitions.",
      "Allows users to send messages, which I receive directly via email.",
    ],
    TechStack: ["ReactJS", "Tailwind", "MUI", "Motion", "AOS", "Lucide"],
    Github: "https://github.com/NAEEM-UL-HASSAN/my-portfolio.git",
    Link: "https://naeem-portfolio-dev.vercel.app/",
  },

  {
    id: 4, // Adjust id as per your projects sequence
    Img: "expense-track.png", // replace with your actual image filename in assets/public
    Title: "Expense Tracker App",
    Description:
      "Developed a cross-platform mobile Expense Tracker app using Flutter and Dart. The app allows users to track daily expenses, categorize them, and view summaries for better financial management. Integrated Firebase for secure authentication and real-time data storage.",
    Features: [
      "User authentication using Firebase Auth for secure login and signup.",
      "Add, view, and delete expense entries with intuitive UI.",
      "Categorize expenses for organized tracking.",
      "Real-time data storage and retrieval using Firestore.",
      "Responsive and clean Flutter UI for a seamless user experience.",
    ],
    TechStack: ["Flutter", "Dart", "Firebase"],
    Github: "https://github.com/GM-6120/Flutter_Projects/tree/main/Expense-Tracker-App", // replace with your actual GitHub repo link if public
    Link: "https://github.com/GM-6120/Flutter_Projects/tree/main/Expense-Tracker-App", // add if published on Play Store or web
  },

  {
    id: 2,
    Img: "fyp.png", // replace with your actual image filename in assets/public
    Title: "Soil Care Tech – AI-Based Soil Health Monitoring",
    Description:
      "Developed an AI-powered soil health monitoring system using Landsat 9 imagery and Google Earth Engine API, integrated with ML models (CNN, EfficientNet, LightGBM, SVM) for soil classification and degradation analysis. Designed a Flutter app with Firebase for user-friendly data visualization and real-time access.",
    Features: [
      "Analyzes Landsat 9 satellite imagery for soil health indicators.",
      "Implements CNN, EfficientNet, LightGBM, and SVM models for accurate soil classification.",
      "Integrates Google Earth Engine API for remote sensing data processing.",
      "Cross-platform Flutter app with Firebase integration for real-time results and user interaction.",
      "Backend powered by Flask for ML model deployment and API serving.",
    ],
    TechStack: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "Flask",
      "Google Earth Engine API",
      "Flutter",
      "Firebase",
    ],
    Github:
      "https://github.com/GM-6120/MachineLearning_Projects/tree/main/SoilCareTech-FYP",
    Link: "https://github.com/GM-6120/MachineLearning_Projects/tree/main/SoilCareTech-FYP", // add if deployed
  },

  {
  id: 3, // Adjust id as per your projects sequence
  Img: "signlanguage.webp", // replace with your actual image filename in assets/public
  Title: "Sign Language Detection",
  Description:
    "Developed a real-time Sign Language Detection system using Python, TensorFlow, and MediaPipe. The system recognizes hand gestures and translates them into corresponding alphabets or words, enhancing communication accessibility for the deaf and hard of hearing community.",
  Features: [
    "Real-time hand tracking and gesture recognition using MediaPipe.",
    "Trained a CNN model with TensorFlow for accurate sign detection.",
    "Integrates webcam input for live predictions.",
    "Displays translated text dynamically for user feedback.",
    "Modular and extendable code for adding more gestures and languages."
  ],
  TechStack: ["Python", "TensorFlow", "MediaPipe", "OpenCV"],
  Github: "https://github.com/GM-6120/MachineLearning_Projects/tree/main/SignLanguageDetection-ML", // replace with your actual GitHub repo link
  Link: "https://github.com/GM-6120/MachineLearning_Projects/tree/main/SignLanguageDetection-ML" // add if deployed as web app or published demo
},

];

const certificates = [
  // {
  //   Img: "Frontend.svg",
  // },
  // {
  //   Img: "SE.svg",
  // },
  // {
  //   Img: "SML.svg",
  // },
  // {
  //   Img: "FS.svg",
  // },
  // {
  //   Img: "MERN.svg",
  // },
];

function Portfolio() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = (type) => {
    if (type === "projects") {
      setShowAllProjects((prev) => !prev);
    } else {
      setShowAllCertificates((prev) => !prev);
    }
  };

  const displayedProjects = showAllProjects
    ? projects
    : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates
    ? certificates
    : certificates.slice(0, initialItems);

  return (
    <div
      className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden"
      id="Portfolio"
    >
      <div
        className="text-center pb-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-[#ff8c00]">
          Portfolio Showcase
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Trace my journey through projects and certifications, each a key
          milestone in my learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          variant="fullWidth"
          sx={{
            minHeight: "70px",
            "& .MuiTab-root": {
              fontSize: { xs: "0.9rem", md: "1rem" },
              fontWeight: "600",
              color: "#94a3b8",
              textTransform: "none",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              padding: "20px 0",
              zIndex: 1,
              margin: "8px",
              borderRadius: "12px",
              "&:hover": {
                color: "#ffffff",
                backgroundColor: "rgba(139, 92, 246, 0.1)",
                transform: "translateY(-2px)",
              },
              "&.Mui-selected": {
                color: "#fff",
                background:
                  "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
              },
            },
            "& .MuiTabs-indicator": {
              height: 0,
            },
            "& .MuiTabs-flexContainer": {
              gap: "8px",
            },
          }}
        >
          <Tab
            icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />}
            label="Projects"
            {...a11yProps(0)}
          />
          <Tab
            icon={
              <Award className="mb-2 w-5 h-5 transition-all duration-300" />
            }
            label="Certificates"
            {...a11yProps(1)}
          />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    data-aos={
                      index % 3 === 0
                        ? "fade-up-right"
                        : index % 3 === 1
                        ? "fade-up"
                        : "fade-up-left"
                    }
                    data-aos-duration={
                      index % 3 === 0
                        ? "1000"
                        : index % 3 === 1
                        ? "1200"
                        : "1000"
                    }
                  >
                    <CardProject
                      Img={project.Img}
                      Title={project.Title}
                      Description={project.Description}
                      Link={project.Link}
                      id={project.id}
                    />
                  </div>
                ))}
              </div>
            </div>
            {projects.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore("projects")}
                  isShowingMore={showAllProjects}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                {displayedCertificates.map((certificate, index) => (
                  <div
                    key={index}
                    data-aos={
                      index % 3 === 0
                        ? "fade-up-right"
                        : index % 3 === 1
                        ? "fade-up"
                        : "fade-up-left"
                    }
                    data-aos-duration={
                      index % 3 === 0
                        ? "1000"
                        : index % 3 === 1
                        ? "1200"
                        : "1000"
                    }
                  >
                    <Certificate
                      Img={certificate.Img}
                      Title={certificate.Title}
                      Description={certificate.Description}
                      id={certificate.id}
                    />
                  </div>
                ))}
              </div>
            </div>
            {certificates.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore("certificates")}
                  isShowingMore={showAllCertificates}
                />
              </div>
            )}
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
export default Portfolio;
