import React from "react";
import ServicesBox from "./ServicesBox.jsx";
import Heading from "../../HelperComp/Heading.jsx";

const Services = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="What I do"
       
      />

      {/* Services Card  */}
      <div>
        <ServicesBox />
      </div>
    </div>
  );
};

export default Services;
