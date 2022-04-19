import React from "react";
import { Content } from "../ui/Content";
import { Footer } from "../ui/Footer";
import { Navbar } from "../ui/Navbar";

export const AppSotoScreen = () => {
  return (
    <>
      <div className="animate__animated animate__fadeIn">
        <Navbar />
        <Content />
        <Footer />
      </div>
    </>
  );
};
