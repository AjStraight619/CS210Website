import React from "react";
import { Card, CardContent } from "../ui/card";
import Avatar from "./avatar";

const Intro = () => {
  return (
    <Card className="w-full p-4 bg-slate-300 shadow-md shadow-black">
      <CardContent className="flex flex-row justify-between items-center gap-2">
        <Avatar />
        <p>
          Manju Muralidharan has a Master's Degree in Computer Science from
          Illinois Institute of Technology, Chicago and a Bachelors degree in
          Computer Engineering from Anna University, India, She started her
          career as a Web Developer for Oracle Financial Services Software in
          Bangalore, India. After moving to the United Stated she worked as an
          Instructor at the IIT Computer Discovery After School programs in
          Chicago from 2013 to 2015. She combines her passion for teaching, love
          for technology and penchant for crafting to teach a variety of courses
          including Lego Mindstorms, Android App Design, Craft - Electronics,
          DIY Robots for Library NExT through UCSD Extension and as a volunteer
          & official vendor for the San Diego Public Libraries.
        </p>
      </CardContent>
    </Card>
  );
};

export default Intro;
