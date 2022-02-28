import React, { useState } from "react";
import CarCard from "../../components/carCard/CarCard";
import { CAR_LIST } from "../../MockData";
import { MainContainer, ToggleButton, CardWrapper } from "./HomePage.styles";

const HomePage = () => {
  const [toggle, setToggle] = useState(false);

  const ToggleButtonClick = () => {
    setToggle(!toggle);
  };
  // filter nexa cars list
  const nexaCarList = CAR_LIST.filter(seg => seg.segment === 'Nexa')
  // filter nexa cars list
  const arenaCarList = CAR_LIST.filter(seg => seg.segment === 'Arena')
  
  //conditionally render the cars list
  const carList = () =>{
      if(toggle) return nexaCarList
    return arenaCarList
  }
  return (
    <MainContainer>
      <div style={{ textAlign: "end", marginBottom:20 }}>
        <ToggleButton onClick={ToggleButtonClick} disableRipple>
          {toggle ? "ARENA" : "NEXA"}
        </ToggleButton>
      </div>
      <div>
        {carList().map((item) => {
          return (
            <div style={{width:'100%'}}>
              <CarCard carName={item.carName} img={item.img} />
            </div>
          );
        })}
      </div>
    </MainContainer>
  );
};

export default HomePage;
