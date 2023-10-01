import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor Degree  ",
    location: "Adama Science and Technology University Adama, Ethiopia",
    description:
      "Computer Science and Engineering",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Addis Ababa, ETHIOPIA",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Addis Ababa, ETHIOPIA",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Smart exam monitoring system",
    description:
      "It is to effectively evaluate the examinees thoroughly through a totally automated system and obtain fast and accurate results.",
    tags: ["React", "Redux Toolkit", "Matrial ui", "RestAPI"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Web Testing | Intern | condigital.io",
    description:
      "Test all aspects of the web application's functionality, including looking for bugs with usability, compatibility, security, and general performance.",
    tags: ["Selenium Grid  ", "Selenium IDE"],
    imageUrl: rmtdevImg,
  },
  {
    title: "MiniMicroservicesBlog",
    description:
      "A mini microservice blog project using 4 node js service nextjs app.",
    tags: ["React", "Next.js", "mongodb", "Tailwind"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Docker",
  "Framer Motion",
] as const;
