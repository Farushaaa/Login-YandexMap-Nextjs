import Navbar from "@/components/Navbar";
import YandexMap from "@/components/YandexMap";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar theme="Events" />
      <YandexMap />
    </div>
  );
};

export default page;
