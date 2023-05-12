import React from "react";
import "../Styles/styles.css";

const PageTwo = ({ onNextPage }) => {

  const handleNextStep = () => {
    onNextPage();
  };

  return (
    <>
      <div className="page-wrapper-1">
        <div className="page-1">
          <p>Step 2/5</p>
          <h3>Next, provide us with your city</h3>
          <h4>Please fill in the details below;</h4>
        </div>
      </div>
      <div className="page-wrapper-2">
        <div className="page-2">
          <h4>Enter your city</h4>
          <input type="text" placeholder="Enter city..."/>
          <div className="page-btn">
            <button onClick={handleNextStep}>Next Step</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default PageTwo;