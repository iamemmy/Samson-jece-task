import React, { useState } from "react";
import "../src/Styles/styles.css";

//SideBar Component
import SideBar from "./Component/SideBar";

// Main Components
import PageOne from "./Component/PageOne";
import PageTwo from "./Component/PageTwo";
import PageThree from "./Component/PageThree";
import PageFour from "./Component/PageFour";
import PageFive from "./Component/PageFive";

//Icon URL
import Icon1 from "./assets/user.png";
import Icon2 from "./assets/location.png";
import Icon3 from "./assets/phone-call.png";
import Icon4 from "./assets/address.png";
import Icon5 from "./assets/countries.png";

//Icon Alt
import Alt1 from "./assets/user-2.png";
import Alt2 from "./assets/location-2.png";
import Alt3 from "./assets/phone-call-2.png";
import Alt4 from "./assets/address-2.png";
import Alt5 from "./assets/countries-2.png";

const App = () => {
  const [activeItem, setActiveItem] = useState(1);

  const handleItemClick = (itemNumber) => {
    setActiveItem(itemNumber);
  };

  const onNextPage = () => {
    handleItemClick(activeItem + 1);
  };

  return (
    <div className="app">
      <div className="main-wrapper">
        <div className="top">
          <h3>My Skill Level</h3>
          <p>Answer the following questions to begin your plan</p>
        </div>
        <div className="content-wrapper">
          <div className="sidebar">
            <SideBar
              text="Your Name"
              textTwo="First, Middle & Last name"
              iconSrc={activeItem === 1 ? Icon1 : Alt1}
              isActive={activeItem === 1}
              onClick={() => handleItemClick(1)}
            />
            <SideBar
              text="City"
              textTwo="Location"
              iconSrc={activeItem === 2 ? Icon2 : Alt2}
              isActive={activeItem === 2}
              onClick={() => handleItemClick(2)}
            />
            <SideBar
              text="Telephone"
              textTwo="Number"
              iconSrc={activeItem === 3 ? Icon3 : Alt3}
              isActive={activeItem === 3}
              onClick={() => handleItemClick(3)}
            />
            <SideBar
              text="House"
              textTwo="Address"
              iconSrc={activeItem === 4 ? Icon4 : Alt4}
              isActive={activeItem === 4}
              onClick={() => handleItemClick(4)}
            />
            <SideBar
              text="Country of"
              textTwo="Residence"
              iconSrc={activeItem === 5 ? Icon5 : Alt5}
              isActive={activeItem === 5}
              onClick={() => handleItemClick(5)}
            />
          </div>
          <div className="content">
            {activeItem === 1 && <PageOne onNextPage={onNextPage} />}
            {activeItem === 2 && <PageTwo onNextPage={onNextPage} />}
            {activeItem === 3 && <PageThree onNextPage={onNextPage} />}
            {activeItem === 4 && <PageFour onNextPage={onNextPage} />}
            {activeItem === 5 && <PageFive />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;