import React from "react";
import LOGO from "../public/LOGO.svg";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Container1 = () => {
  return (
    <div className="bg-zinc-200 font-bold65q21` flex flex-col md:flex-row justify-center items-baseline text-start py-8 ">
      <div className="flex flex-col justify-start text-start mx-16">
       <div>
       <img src={LOGO} alt="" className="pl-2" />

       </div>
        <div className=" flex flex-col justify-center text-start  ">
          <p className="my-2">Product by Retink Media UG</p>
          <p className="">Bonn, Germany</p>
        </div>
      </div>
      <div className="flex mt-4 flex-col justify-start text-start mx-16">
        <p className="my-2">Get Early Acess</p>
        <p className="">Provide Feedback</p>
      </div>
      <div className="flex flex-col justify-start text-start mx-16 mt-4 md:hidden ">
        <p className="mt-2">ABOUT</p>
        <p className="mt-2">CONTACT</p>
        <p className="mt-2">IMPRINT</p>
        <p className="mt-2">FP</p>
      </div>
      <div className="Connections__Links mt-4 flex flex-col justify-start text-start mx-16">
        <h1 className="font-bold">Connect with Us</h1>
        <div className="flex justify-center mt-4 items-start">
         
         <div className="mx-2">
         <FacebookRoundedIcon />
         </div>
          <div>
          <TwitterIcon />
          </div>
         <div className="mx-2">
         <InstagramIcon />
         </div>
          <div>
          <YouTubeIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container1;
