import React from "react";

const AboutMission = ({headind,paragraph1,paragraph2,img,flex}) => {
  return (
    <>
      <section>
        <div className={`bg-white md:flex justify-between  items-center ${flex} ` }>
          <div className="md:w-[50%]">
          <div className="md:mt-0 mt-8 md:text-start text-center ">
            <h1 className="font-Robot font-bold text-black text-4xl ">
            {headind}
            </h1>
          </div>
          <div className=" text-black font-Mont font-medium text-base mt-10 md:text-start text-center">
            <p>
             {paragraph1}
            </p>
            <p className="mt-7">
           { paragraph2}
            </p>
          </div>
          </div>
          <div className="md:w-[40%]">
            <img src={img} />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMission;
