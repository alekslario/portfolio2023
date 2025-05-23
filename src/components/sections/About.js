import React from "react";
import $ from "./About.module.scss";
import Image from "next/image";
import config from "../../config";
import { motion } from "framer-motion";
const About = () => {
  const skills = [
    "Ionic",
    "TypeScript",
    "React",
    "Java",
    "CloudFormation",
    "PostgreSQL",
    "Node.js",
    "Python",
    "Terraform",
    "Docker",
  ];
  return (
    <motion.section
      {...config.basicAnimation}
      id="about"
      className={$.container}
    >
      <h2 className="numbered-heading">About Me</h2>
      <div>
        <div>
          <p>
            Hey! My name is Alex, I’m an ex-Amazon intern, and I love building
            cool stuff that lives on the internet.
          </p>

          <p>Here are a few technologies I’ve been working with recently:</p>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>
        <div className={$.imageWrapper}>
          <Image src={config.headshot} alt="Headshot" fill={true} />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
