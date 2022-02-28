import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Contianer, InnerDiv } from "./NavBAr.styles";
import logo from "../../assets/images/maruti-suzuki-logo.svg";
const NavBar = () => {
  return (
    <Contianer>
      <InnerDiv>
        <Link to={"/"}>
          <img src={logo} alt="logo" style={{width:150}} />
        </Link>
        <Link to={"/driveForm"} style={{color:"black"}}>Book a test drive</Link>
      </InnerDiv>
    </Contianer>
  );
};

export default NavBar;
