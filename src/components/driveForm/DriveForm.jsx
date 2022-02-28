import { TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormContainer = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  .inputDiv {
    display: flex;
    flex-direction: column;
  }
`;

const DriveForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    sessionStorage.setItem("testDriveBookData", JSON.stringify(data));
    navigate("/", { replace: true });
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputDiv">
          <TextField
            {...register("firstName")}
            style={{ marginBottom: 20 }}
            placeholder="first name"
            required
          />
          <TextField
            {...register("lastName")}
            style={{ marginBottom: 20 }}
            placeholder="last name"
            required
          />
          <TextField
            {...register("phoneNumber")}
            style={{ marginBottom: 20 }}
            placeholder="phone number"
            required
          />
          <TextField
            type="submit"
            className="submitButton"
            style={{ marginBottom: 20 }}
          />
          <Link to={"/"} style={{ textAlign: "center" }}>
            Cancel
          </Link>
        </div>
      </form>
    </FormContainer>
  );
};

export default DriveForm;
