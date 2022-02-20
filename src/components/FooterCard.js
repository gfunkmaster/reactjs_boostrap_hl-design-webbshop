import React, { useState } from "react";
import { Link } from "react-router-dom";

import images from "../utils/data";

console.log(images[0])


const FooterCard = ({ id, width, height, headerText, text, picture, url }) => {

  

  
  
  
  return (

    <>
    <div className="col-xs col-md w-100  p-0">
      <Link to="/men" className="text-decoration-none">
      <div
        className="footer-column d-flex align-items-end flex-column"
        key={id}
    
        style={{
          backgroundImage: `url(${images[0].picture}`,
          height: '500px',
           width: '100%%', 
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          cursor: "pointer"
         
        }}
      >
          <div className=" mt-auto p-2">
          <h3 className="p-2 text-light text-uppercase fw-normal fs-4 ">{images[0].headerText}</h3>
          <p className="p-2 text-muted font-weight-light fs-6">{images[0].text}</p>
          <p className="p-2 text-light font-weight-bold">Read More</p>
        </div>
      </div>

      </Link>
    </div>
    <div className="col-sm col-md w-100 p-0">
    <Link to="/women" className="text-decoration-none">
    <div
        className="footer-column d-flex align-items-end flex-column"
        key={images[1].id}
    
        style={{
          backgroundImage: `url(${images[1].picture}`,
          height: '500px',
           width: '100%%', 
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          cursor: "pointer"
         
        }}
      >
          <div className=" mt-auto p-2">
          <h3 className="p-2 text-light text-uppercase fw-normal fs-4 ">{images[1].headerText}</h3>
          <p className="p-2 text-muted font-weight-light fs-6">{images[1].text}</p>
          <p className="p-2 text-light font-weight-bold">Read More</p>
        </div>
      </div>

      </Link> 

    </div>
    
    </>
  );
};

export default FooterCard;


/* 

col-xs-12 col-sm-6 col-md-4


col-sm col-md footer-column d-flex align-items-end flex-column
*/


/* 
<Link to={url}>
    
      <div
        className="col-sm col-md footer-column d-flex align-items-end flex-column"
        key={id}
    
        style={{
          backgroundImage: `url(${picture}`,
          height: '500px',
           width: '50%%', 
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          cursor: "pointer"
         
        }}
      >
        <div className=" mt-auto p-2">
          <h3 className="p-2 text-light text-uppercase fw-normal fs-4 ">{headerText}</h3>
          <p className="p-2 text-muted font-weight-light fs-6">{text}</p>
          <p className="p-2 text-light font-weight-bold">Read More</p>
        </div>
      </div>
      </Link>



*/