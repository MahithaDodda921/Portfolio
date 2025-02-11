import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import vitlogo from '../assets/vitlogo.png';
import alfa from '../assets/alfahive_logo.jpeg';
import gm from '../assets/gmlogo.png';

const experienceData = [
  {
    title: "Data/Software Engineer Intern",
    company: "George Mason University",
    period: "September 2024 – Present",
    location: "Fairfax, VA",
    logo: gm,
    details: [
      "Developed a cloud-native analytics platform using Next.js, FastAPI, and PostgreSQL, boosting instructor productivity by 40%.",
      "Enhanced FastAPI and PostgreSQL infrastructure to process huge number of weekly student records with sub-second query response times.",
      "Managed ETL pipelines with Apache Airflow and dbt, reducing data transformation time by 60% for real-time analytics.",
      "Constructed interactive React dashboards with D3.js and Plotly.js, doubling the speed of identifying at-risk students."
    ]
  },
  {
    title: "Software Engineer",
    company: "Alfahive",
    period: "February 2022 – August 2023",
    logo: alfa,
    location: "Bangalore, India",
    details: [
      "Spearheaded the development of a Control Assessment framework with Spring Boot and Docker, leading to a 25% reduction in development time.",
      "Streamlined deployment using Azure Blob Storage and background jobs, saving 80% of manual effort.",
      "Enabled real-time communication through WebSockets and React Hooks, reducing message persistence issues by 40%.",
      "Optimized Mongo database with advanced indexing and sharding, resulting in a 30% decrease in query response time."
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Alfahive",
    period: "August 2021 – January 2022",
    logo: alfa,
    location: "Bangalore, India",
    details: [
      "Supervised the creation of the Employee Onboarding Portal, resulting in a 60% reduction in onboarding time.",
      "Developed resilient RESTful APIs with Java and Spring Boot, supporting over 10,000 transactions per day.",
      "Implemented user feedback mechanisms and designed iterative UI/UX improvements, achieving 80% user retention."
    ]
  }
];

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    institution: "George Mason University",
    period: "August 2023 – May 2025",
    gpa: "3.89/4.00",
    location: "Fairfax, VA, USA",
    logo: gm,
    courses: ["Software Engineering", "Analysis of Algorithms", "Cloud Computing", "Software Architecture & Design", "Artificial Intelligence"]
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Vellore Institute of Technology",
    period: "July 2018 – May 2022",
    gpa: "3.9/4.00",
    location: "Amaravati, AP, India",
    logo: vitlogo,
    courses: ["Data Structures", "Object Oriented Programming", "Database Systems", "Operating Systems", "Big Data Analysis", "Computer Networks"]
  }
];

const TimelineCard = ({ 
  children, 
  isEven,
  isLast,
  theme
}) => {
  const ref = useRef(null);

  return (
    <div 
      ref={ref}
      className={`relative pb-16 last:pb-0 group grid grid-cols-1 md:grid-cols-12 gap-4`}
    >
      {/* Vertical Line */}
      {!isLast && (
        <div 
          className={`
            absolute top-0 bottom-0 w-0.5 
            ${theme === 'blue' ? 'bg-blue-300' : 'bg-purple-300'} 
            left-4 md:left-1/2 transform md:-translate-x-1/2
            group-last:hidden
          `}
        />
      )}

      {/* Timeline Dot */}
      <div 
        className={`
          absolute top-4 left-4 md:left-1/2 transform md:-translate-x-1/2 
          w-8 h-8 rounded-full z-10 
          border-4 border-white
          ${theme === 'blue' ? 'bg-blue-500' : 'bg-purple-500'}
        `}
      />

      {/* Card Container */}
      <motion.div 
        initial={{ opacity: 0, x: 0, y: 50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`
          col-span-1 md:col-span-6 pl-16 md:pl-0
          ${isEven ? 'md:col-start-7' : 'md:col-end-7'}
        `}
      >
        {children}
      </motion.div>
    </div>
  );
};

const ExperienceCard = ({ experience }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-blue-100 flex flex-col">
      <div className="flex items-center mb-4">
        {/* Logo */}
        {experience.logo && (
          <div className="w-16 h-16 mr-4 flex-shrink-0">
            <img 
              src={experience.logo} 
              alt={`${experience.company} logo`} 
              className="w-full h-full object-contain transition-all duration-300"
            />
          </div>
        )}
        <div>
          <div className="flex items-center gap-4">
            <h3 className="text-xl font-bold text-blue-800">{experience.title}</h3>
          </div>
          <p className="text-base font-semibold text-gray-700 mb-2">{experience.company}</p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 text-gray-600 mb-4 text-sm">
        <span className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-500" />
          {experience.period}
        </span>
        <span className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-blue-500" />
          {experience.location}
        </span>
      </div>
      
      <ul className="space-y-3 flex-grow">
        {experience.details.map((detail, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
            <span className="text-gray-700 text-sm">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const EducationCard = ({ education }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-purple-100 flex flex-col">
      <div className="flex items-center mb-4">
        {/* Logo */}
        {education.logo && (
          <div className="w-16 h-16 mr-4 flex-shrink-0">
            <img 
              src={education.logo} 
              alt={`${education.institution} logo`} 
              className="w-full h-full object-contain transition-all duration-300"
            />
          </div>
        )}
        <div>
          <div className="flex items-center gap-4">
            <h3 className="text-xl font-bold text-purple-800">{education.degree}</h3>
          </div>
          <p className="text-base font-semibold text-gray-700 mb-2">{education.institution}</p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 text-gray-600 mb-4 text-sm">
        <span className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-purple-500" />
          {education.period}
        </span>
        <span className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-purple-500" />
          {education.location}
        </span>
      </div>
      
      <p className="text-gray-700 font-semibold mb-4 text-sm">GPA: {education.gpa}</p>
      
      <div>
        <h4 className="font-semibold mb-2 text-purple-800">Key Courses:</h4>
        <div className="flex flex-wrap gap-2">
          {education.courses.map((course, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceEducation = () => {
  return (
    <div>
      {/* Experience Section */}
      <section id="experience" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 
              bg-clip-text text-transparent 
              bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Professional Journey
          </motion.h2>
          
          <div className="relative max-w-6xl mx-auto">
            {experienceData.map((exp, index) => (
              <TimelineCard 
                key={index} 
                isEven={index % 2 === 1}
                isLast={index === experienceData.length - 1}
                theme="blue"
              >
                <ExperienceCard experience={exp} />
              </TimelineCard>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 
              bg-clip-text text-transparent 
              bg-gradient-to-r from-purple-600 to-pink-600"
          >
            Academic Foundations
          </motion.h2>
          
          <div className="relative max-w-6xl mx-auto">
            {educationData.map((edu, index) => (
              <TimelineCard 
                key={index} 
                isEven={index % 2 === 1}
                isLast={index === educationData.length - 1}
                theme="purple"
              >
                <EducationCard education={edu} />
              </TimelineCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceEducation;