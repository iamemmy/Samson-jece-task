import React from "react";
import "../Styles/styles.css";

const PageThree = ({ onNextPage }) => {

  const handleNextStep = () => {
    onNextPage();
  };

  return (
    <>
      <div className="page-wrapper-1">
        <div className="page-1">
          <p>Step 3/5</p>
          <h3>Next, provide us with your telephone</h3>
          <h4>Please fill in the details below;</h4>
        </div>
      </div>
      <div className="page-wrapper-2">
        <div className="page-2">
          <h4>Enter your telephone</h4>
          <input type="number" placeholder="Enter telephone..."/>
          <div className="page-btn">
            <button onClick={handleNextStep}>Next Step</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default PageThree;