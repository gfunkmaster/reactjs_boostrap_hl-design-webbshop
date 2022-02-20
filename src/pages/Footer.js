import React from "react";
import { Link } from "react-router-dom";
import FooterCard from "../components/FooterCard"
import images from "../utils/data"

const Footer = () => {
  return (
    <>
      <div className="container-fluid w-100  ">
        <div className="row d-flex ">
          <FooterCard />
        </div>
      </div>
    </>
  );
};

export default Footer;
