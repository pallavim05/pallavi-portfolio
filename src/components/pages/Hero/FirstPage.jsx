import React from "react";
import personImg from "../../../assets/person2.png";

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="h-full w-full bg-secondary page-shadow">
        <div className="p-10  space-y-4">
          {/* image-container */}
          <div>
            <img src={personImg} alt="" className="w-[300px] mx-auto" />
          </div>
          {/* text-container */}
          <div>
            <div className="space-y-3">
              <p className="uppercase">Hello</p>
              <p className="text-4xl md:text-5xl font-bold text-black/80">
                I'm Pallavi Mogare
              </p>
              <p className="text-black/75 text-left">Full Stack Developer</p>
              <p className="text-black/75">
                "As a dedicated full-stack developer at Revsol,I specialize in buliding robust and scalable web applicatons. With experise in both front-end & back-end development,I work with a wide range of technologies including Html,Css,JavaScript,React.Js,WordPress,PHP,MySQL."
              </p>
              <a
                className="inline-block primary-btn "
                href="pallavimogare584@gmail.com"
              >
                {" "}
                Hire me
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
