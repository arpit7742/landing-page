import React, { useState } from "react";
import pic1 from "../myassets/pic1.jpg";
import pic2 from "../myassets/pic2.jpg";
import pic3 from "../myassets/pic3.jpg";
import pic4 from "../myassets/pic4.jpg";
import pic5 from "../myassets/pic5.jpg";
import Form from "./Form";
import Footer from "./Footer";

const Section3 = () => {
  const [blocks, setBlocks] = useState([
    {
      id: 1,
      pic: pic1,
      head: "Logos",
      des: " Have a unique & creative logo designed to express and represent your brand identity.",
    },
    {
      id: 2,
      pic: pic2,
      head: "Blog Writing",
      des: " Write SEO enriched blog posts as long or short articles on any topic of your choice .",
    },
    {
      id: 3,
      pic: pic3,
      head: "Animated Videos",
      des: "Bring animated characters to life to keep your viewers engaged and  entertained.",
    },
    {
      id: 4,
      pic: pic4,
      head: "Product Demos",
      des: "Introduce your product to potential customers in a clear and creative video.",
    },
    {
      id: 5,
      pic: pic5,
      head: "Copywriting",
      des: " Have creative and compelling copies written to boost your product, brand, service or company.",
    },
    
  ]);

  return (
    <div className="min-w-screen h-screen  mb-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-content-center gap-8  p-16 w-full    ">
      {blocks.map((item)=>(
      <div className="flex flex-col justify-center shadow-lg shadow-slate-300 hover:scale-90 hover:shadow-2xl duration-300 p-4 rounded-md " key={item.id}>

      <div className="image">
          <img src={item.pic} className="rounded-lg" alt="" />
        </div>
        <div className="Heading  my-2 inline">{item.head}</div>
        <div className="Line h-1 rounded-lg bg-purple-600 mb-4 w-1/5  duration-300"></div>
        <div className="Description">
         {item.des}
        </div>
      </div>
        ))}
      </div>
      <Form />
      <Footer />
    </div>
  );
};

export default Section3;
