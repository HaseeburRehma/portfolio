"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A portfolio website built using React.js. This website showcases my projects, skills, and experience.",
    image: "/images/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HaseeburRehma/U-MART-WebApp",
    previewUrl: "",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "A photography portfolio website featuring stunning visuals and a user-friendly interface.",
    image: "/images/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HaseeburRehma/Pacman-Game-in-unity",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "An e-commerce application built with React.js and Node.js. It includes features such as user authentication, product browsing, and cart management.",
    image: "/images/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HaseeburRehma/U-MART-WebApp",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "3D Model Simulation",
    description: "A 3D model simulation project using computer vision techniques and OpenCV. It tracks hand movements to interact with virtual objects.",
    image: "/images/experience.jpg",
    tag: ["All", "AI"],
    gitUrl: "https://github.com/HaseeburRehma/Hand-Tracking-using-openCV",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "A template for building React applications with Firebase integration. Includes user authentication, database management, and CRUD operations.",
    image: "/images/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HaseeburRehma/Pacman-Game-in-unity",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "A comprehensive roadmap for becoming a full-stack developer. It covers essential technologies, frameworks, and best practices.",
    image: "/images/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HaseeburRehma/Project1",
    previewUrl: "/",
  },
];


const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isCardDraggable, setIsCardDraggable] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true); // Open the modal when a project is selected
    setIsCardDraggable(true); // Make the card draggable
  };

  const handleModalClose = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
    setIsCardDraggable(false); // Disable card dragging
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onclick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onclick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onclick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{
              duration: 0.3,
              delay: index * 0.4,
            }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              onClick={() => handleCardClick(project)}
              isDraggable={isCardDraggable}
            />
          </motion.li>
        ))}
      </ul>
      {/* Render the Modal component if a project is selected */}
      {selectedProject && isModalOpen && (
        <Modal
          title={selectedProject.title}
          description={selectedProject.description}
          gitUrl={selectedProject.gitUrl}
          previewUrl={selectedProject.previewUrl}
          onClose={handleModalClose}
        />
      )}
    </section>
  );
};

export default ProjectsSection;