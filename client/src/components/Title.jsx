import React from "react";

const Title = ({ title, subTitle, align }) => {
  return (
    <div className="flex flex-col justify-center items-center">

      <h1 className="font-semibold text-4xl md:text-5xl">{title}</h1>
      <p className="text-sm md:text-base text-gray-500"> {subTitle} </p>
      
    </div>
  );
};

export default Title;
