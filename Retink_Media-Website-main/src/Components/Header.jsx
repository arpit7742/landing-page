import React, { useEffect } from "react";
import avatar from "../myassets/avatar.png";
import LOGO from "../public/LOGO.svg"
import { useState } from "react";


const Header = () => {
  const[word,setWord]=useState("");
  const words=[
    {
      id:1,
      word:"Logos",
    },
    {
      id:2,
      word:"Adds and more !",
    },
    {
      id:3,
      word:"NewsLettter",
    },
    {
      id:4,
      word:"Animated Videos",
    },
    {
      id:4,
      word:"Explainer Videos",
    },
    {
      id:5,
      word:"Blog Writing",
    },
    {
      id:6,
      word:"Product Demos",
    },
    {
      id:7,
      word:"Business Cards",
    },
    
  ]
  useEffect(()=>{

  },[])
  return (
    <div className="w-full h-screen bg-gradient-to-l from-purple-100 via-fuchsia-100 to-white bg-white flex flex-row justify-between text-center md:text-start">
      <div className="container_1 pt-0 flex flex-col justify-center px-4 md:w-2/3  item-start">
        <h1 className="logo">
          <img src={LOGO} alt="" className="" />
        </h1>
        <div className="head_line flex flex-col  md:py-2 justify-center  text-3xl">
          <p className="font-bold ">Get Advanced AI + Expert Created</p>
          <span className="font-bold text-purple-600">Logos</span>
        </div>
        <div className="below_line text-lg md:pb-2 mt-4">
          Boost your sales <span className="text-purple-600">10x faster</span>
          with content customized by our unique partnership of
          <span className="text-purple-600">
            human creativity and AI optimization
          </span>
        </div>
        <div className="sign_up font-bold my-4  text-purple-600 text-xl">
          Sign Up For The BETA!
        </div>
        <div className="text-lg px-2">
          <span className="underline  text-purple-600">Business Name</span>
          would like a beta invite sent to
          <span
            className="
          underline text-purple-600"
          >
            
            Email address
          </span>
          when it’s ready!
        </div>
        <div></div>
        <div className="buttons flex flex-col justify-center md:justify-start  md:flex-row  text-lg">
          <button className="button_1 bg-gradient-to-b from-purple-600  to-purple-500 mt-5 md:mr-5 rounded-2xl px-8 p-4 text-slate-50 hover:scale-105 duration-500">
            Notify Me
          </button>
          <button className="button_2 border  border-purple-600 hover:scale-105 duration-500 mt-5 rounded-2xl p-4 text-purple-700">
            Sign Up As Freelance Partner
          </button>
        </div>
      </div>
      <div className="container_2 hidden lg:flex flex-col justify-between items-center  w-full h-full ">
        <img src={avatar} alt="Avatar" className=" animate-pulse w-1/2 " />
      </div>
    </div>
  );
};

export default Header;
