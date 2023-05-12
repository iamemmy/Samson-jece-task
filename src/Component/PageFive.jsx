import React from "react";
import "../Styles/styles.css";

const PageFive = () => {
  
  return (
    <>
      <div className="page-wrapper-1">
        <div className="page-1">
          <p>Step 5/5</p>
          <h3>Next, provide us with your country</h3>
          <h4>Please fill in the details below;</h4>
        </div>
      </div>
      <div className="page-wrapper-2">
        <div className="page-2">
          <h4>Enter your country</h4>
          <input type="text" placeholder="Enter country..."/>
          <div className="page-btn">
            <button>Next Step</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default PageFive;