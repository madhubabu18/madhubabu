import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/maruti-suzuki-logo.svg";
import { Contianer, InnerDiv } from "./NavBar.styles";
const NavBar = () => {
  return (
    <Contianer>
      <InnerDiv>
        <Link to={"/"}>
          <img src={logo} alt="logo" style={{ width: 150 }} />
        </Link>
        <Link to={"/driveForm"} style={{ color: "black" }}>
          Book a test drive
        </Link>
      </InnerDiv>
    </Contianer>
  );
};

export default NavBar;
