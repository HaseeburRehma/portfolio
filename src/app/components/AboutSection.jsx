"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TabButton from "./TabButton"; // Ensure TabButton is correctly imported

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaPython,
    FaPhp,
    FaReact,
    FaLaravel,
    FaGraduationCap,
    FaBriefcase,
    FaCertificate,
    FaUser,
} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiCsharp, SiCplusplus, SiDjango } from 'react-icons/si';

const skills = [
    { name: 'HTML', icon: <FaHtml5 style={{ color: "#E44D26", fontSize: "2.5rem" }} /> },
    { name: 'CSS', icon: <FaCss3Alt style={{ color: "#264DE4", fontSize: "2.5rem" }} /> },
    { name: 'Tailwindcss', icon: <SiTailwindcss style={{ color: "#38B2AC", fontSize: "2.5rem" }} /> },
    { name: 'JS', icon: <FaJs style={{ color: "#F0DB4F", fontSize: "2.5rem" }} /> },
    { name: 'PHP', icon: <FaPhp style={{ color: "#777BB4", fontSize: "2.5rem" }} /> },
    { name: 'Python', icon: <FaPython style={{ color: "#3776AB", fontSize: "2.5rem" }} /> },
];

const frameworks = [
    { name: 'Laravel', icon: <FaLaravel style={{ color: "#FF2D20", fontSize: "2.5rem" }} /> },
    { name: 'React', icon: <FaReact style={{ color: "#61DAFB", fontSize: "2.5rem" }} /> },
];

const languages = [
    { name: 'Python', icon: <FaPython style={{ color: "#3776AB", fontSize: "2.5rem" }} /> },
    { name: 'Php', icon: <FaPhp style={{ color: "#777BB4", fontSize: "2.5rem" }} /> },
    { name: 'TS', icon: <SiTypescript style={{ color: "#007ACC", fontSize: "2.5rem" }} /> },
    { name: 'JS', icon: <FaJs style={{ color: "#F0DB4F", fontSize: "2.5rem" }} /> },
    { name: 'C#', icon: <SiCsharp style={{ color: "#239120", fontSize: "2.5rem" }} /> },
    { name: 'C++', icon: <SiCplusplus style={{ color: "#00599C", fontSize: "2.5rem" }} /> },
];

const TAB_DATA = [
    {
        title: "AboutMe",
        id: "aboutMe",
        icon: <FaUser />,
        content: (
            <div className="tab-content">
                <h3 className="tab-title text-2xl font-bold mb-4"><FaUser className="inline mr-2" />About Me</h3>
                <p className="text-base lg:text-lg leading-relaxed">
                    I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
                </p>
            </div>
        ),
        image: "/images/about.jpg",
    },
    {
        title: "Education",
        id: "education",
        icon: <FaGraduationCap />,
        content: (
            <div className="tab-content grid grid-cols-1 sm:grid-cols-2 gap-4">
                <article className="p-4 rounded-lg">
                    <h3 className="tab-title text-2xl font-bold mb-4"><FaGraduationCap className="inline mr-2" />University</h3>
                    <ul className="list-disc list-inside">
                        <span className="font-bold">2020-2024 </span>
                        <h3 className="text-xl font-bold mb-0">Institute of Space Technology</h3>
                        <li>Bachelor Degree of Computer Science</li>
                    </ul>
                </article>
                <article className="p-4 rounded-lg">
                    <h3 className="tab-title text-2xl font-bold mb-4"><FaGraduationCap className="inline mr-2" />College</h3>
                    <ul className="list-disc list-inside">
                        <span className="font-bold">2016-2019</span>
                        <li>KRL Model College</li>
                    </ul>
                </article>
            </div>
        ),
        image: "/images/education.jpg",
    },
    {
        title: "Skills",
        id: "skills",
        icon: <FaBriefcase />,
        content: (
            <div className="tab-content text-base lg:text-lg leading-relaxed grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg">
                    <h4 className="text-xl font-bold mb-2">Expertise</h4>
                    <div className="grid grid-cols-2 gap-2">
                        {skills.map(skill => (
                            <div key={skill.name} className="flex items-center space-x-2">
                                <div className="text-xl">{skill.icon}</div>

                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-4 rounded-lg">
                    <h4 className="text-xl font-bold mb-2">FrameWorks</h4>
                    <div className="grid grid-cols-2 gap-2">
                        {frameworks.map(framework => (
                            <div key={framework.name} className="flex items-center space-x-2">
                                <div className="text-xl">{framework.icon}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-4 rounded-lg">
                    <h4 className="text-xl font-bold mb-2">Languages</h4>
                    <div className="grid grid-cols-2 gap-2">
                        {languages.map(language => (
                            <div key={language.name} className="flex items-center space-x-2">
                                <div className="text-xl">{language.icon}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        image: "/images/skills.jpg",
    },
    {
        title: "Experience",
        id: "experience",
        icon: <FaBriefcase />,
        content: (
            <div className="tab-content grid grid-cols-1 sm:grid-cols-2 gap-4">
                <article className="p-4 rounded-lg bg-gray-800 shadow-lg">
                    <h4 className="text-xl font-bold mb-2"><FaBriefcase className="inline mr-2" />ENCS Networks</h4>
                    <p className="text-base font-bold mb-2">Software Developer Intern</p>
                    <p className="text-sm font-medium text-gray-400 mb-4">March, 2024 - present</p>
                    <p className="text-base lg:text-lg leading-relaxed mb-4">
                        <strong>Tech stack:</strong> HTML5 / CSS / Bootstrap / ReactJS / JavaScript / jQuery / Php / SQL
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Develop web application</li>
                        <li>Implement UI (front-end site) based on received UI/UX and requirements</li>
                        <li>Co-operate with the back-end team</li>
                    </ul>
                </article>
            </div>
        ),
        image: "/images/experience.jpg",
    },
    {
        title: "Certifications",
        id: "certifications",
        icon: <FaCertificate />,
        content: (
            <article className="tab-content p-4 rounded-lg">
                <h3 className="tab-title text-2xl font-bold mb-4"><FaCertificate className="inline mr-2" />Certifications</h3>
                <ul className="list-disc list-inside">
                    <li>Building AI Application With Watson API's (IBM)</li>
                    <li>Computer Vision and Image Processing Essentials (Coursera)</li>
                    <li>Machine Learning with Python (IBM)</li>
                    <li>Python for Data Science (IBM)</li>
                </ul>
            </article>
        ),
        image: "/images/certificate.jpg",
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("aboutMe");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    const currentTab = TAB_DATA.find((t) => t.id === tab);

    return (
        <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-16 px-4 xl:px-16" id="about">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center"
                >
                    <div className="w-[400px] h-[400px] lg:max-w-[500px] relative overflow-hidden">
                        {currentTab && (
                            <Image
                                src={currentTab.image}
                                alt={currentTab.title}
                                className="absolute w-full h-full object-cover"
                                width={500}
                                height={500}
                            />
                        )}
                    </div>
                </motion.div>
                <div className="mt-8 md:mt-0 text-center md:text-left flex flex-col">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col md:flex-row justify-center md:justify-start mb-8 space-y-4 md:space-y-0 md:space-x-4"
                    >
                        {TAB_DATA.map((tabData) => (
                            <TabButton
                                key={tabData.id}
                                selectTab={() => handleTabChange(tabData.id)}
                                active={tab === tabData.id}
                                className={`px-3 py-2 border-b-4 md:w-auto ${tab === tabData.id ? 'border-white' : 'border-transparent'} hover:border-white transition duration-300`}
                            >
                                <span className="inline-flex items-center -mr-2">
                                    {tabData.icon && <span className="mr-1">{tabData.icon}</span>}
                                    {tabData.title}
                                </span>
                            </TabButton>
                        ))}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-4 p-6 rounded-lg bg-gray-800 shadow-lg"
                    >
                        {/* Updated content display */}
                        <div className="tab-content max-h-96 overflow-y-auto" style={{ scrollBehavior: 'smooth' }}>
                            {/* Added Tailwind CSS classes for styling */}
                            {currentTab && currentTab.content}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

