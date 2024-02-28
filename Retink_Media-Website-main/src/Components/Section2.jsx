import React from "react";
import { useState } from "react";
import image1 from "../myassets/image1.png";
import image2 from "../myassets/image2.png";
import image3 from "../myassets/image3.png";
import image4 from "../myassets/image4.png";
import image5 from "../myassets/image5.png";
import Section3 from  "../Components/Section3"

const Section2 = () => {
  const [data, Setdata] = useState([
    {
      id: 1,
      img: image1,
      head: "Make AI-assisted Content Choices and Make it Human",
      des: "Access and order from an extensive catalogue in any language and on your budget's terms. If unsure, our AI guides you to the best human- content for your business.",
    },
    {
      id: 2,
      img: image2,
      head: "Upload and Maintain Your Brand Identity",
      des: "Add your preferences and brand assets to ensure the contents is consistent with your brand identity. No brand asset? We can make for you!",
    },
    {
      id: 3,
      img: image3,
      head: "Be Informed as We Create",
      des: "Your details are translated and sent to the AI, FP, or both (per your choice) as you relax and receive continuous updates.",
    },
    {
      id: 4,
      img: image4,
      head: "Receive and Review",
      des: "Track your content metrics for improvement and content strategy.",
    },
    {
      id: 5,
      img: image5,
      head: "Publish and Monitor Your Contents Progress",
      des: "The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.",
    },
  ]);

  return (
    <div className="min-w-screen h-screen ">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-content-center gap-8  px-8">
        {data.map((item) => (
          <div
            className="bg-white flex flex-col justify-center items-center text-center rounded-xl  shadow-2xl hover:shadow-xl  m-4 hover:m-5   py-6 min-w-fit hover:text-purple-700  duration-300 hover:border-2  hover:border-purple-600"
            key={item.id}
          >
            <img
              src={item.img}
              className="mt-4 flex justify-center items-center"
              alt="image"
            />
            <h1 className="font-bold text-lg mb-4 p-4  ">{item.head}</h1>
            <p className="text-md mb-2 w-4/5 p-4">{item.des}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col  justify-center items-center text-center md:px-40 ">
        <div className="px-5 flex flex-col  justify-center items-center">
          <h1 className="text-purple-600 font-bold mt-4 mb-5 text-lg md:text-2xl">
            Transform Your Creation Process
          </h1>
          <p className="text-sm mb-5 md:text-lg">
            With a new approach to ordering content, you can now stop juggling
            multiple documents and meetings and start publishing content faster
            and on demand.
          </p>
        </div>
        <div className="px-2 flex flex-col  justify-center items-center">
          <h1 className="text-purple-600 font-bold text-lg mb-5 md:text-2xl">
            Activate Your Business Growth With Retink Content
          </h1>
          <p className="text-sm  md:text-lg">
            Save time and maintain your brand identity within your budget range
            within your budget range and access multiple content services like:
          </p>
        </div>
      </div>
      <Section3 />
    </div>
  );
};

export default Section2;
