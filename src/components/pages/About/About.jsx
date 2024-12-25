import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Heading from "../../HelperComp/Heading";

const About = () => {
  const openLinkedIn = () => {
    window.open("https://linkedin.com/in/pallavi-mogare-6381ab229/", "_blank");
  };

  const openGitIn = () => {
    window.open("https://github.com/pallavim05", "_blank");
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/path/to/resume.pdf"; 
    link.download = "Pallavi_Mogare_Resume.pdf"; 
    link.click();
  };

  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* Heading */}
      <Heading
        title="Experience"
        subtitle="Web Developer (5 April 2023 - Present) Revsol Educare Pvt Ltd, Pune."
      />

      {/* Details section */}
      <div className="mt-10 text-slate-500">
        <ul>
          <li></li>
        </ul>
      

        {/* Social Links */}
        <div className="flex space-x-4 mt-10">
          <AiFillGithub className="social-btn" onClick={openGitIn} />
          <AiFillLinkedin className="social-btn" onClick={openLinkedIn} />
        </div>

        {/* Button Links */}
        <div className="flex space-x-4 mt-4">
          <button className="primary-btn" onClick={downloadResume}>
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
