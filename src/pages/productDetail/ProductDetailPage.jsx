import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CAR_LIST } from "../../MockData";
import {
  LeftContainer,
  MainContainer,
  RightContainer,
  HtmlTable,
} from "./ProductDetailPage.styles";

const ProductDetailPage = () => {
  const { carName } = useParams();
  const productInfo = CAR_LIST.find((item) => `:${item.carName}` === carName);

  return (
    <MainContainer>
      <LeftContainer>
        <img src={productInfo?.img} alt="car" />
      </LeftContainer>
      <RightContainer>
        <HtmlTable>
          <tbody>
            <tr>
              <td>Name: </td>
              <td>{productInfo?.carName}</td>
            </tr>
            <tr>
              <td>Engine Capacity: </td>
              <td>{productInfo?.engine}</td>
            </tr>
            <tr>
              <td>Power: </td>
              <td>{productInfo?.power}</td>
            </tr>
            <tr>
              <td>Torque: </td>
              <td>{productInfo?.torque}</td>
            </tr>
            <tr>
              <td>Fuel Capicity: </td>
              <td>{productInfo?.fuelTank}</td>
            </tr>
            <tr>
              <td>WheelBase: </td>
              <td>{productInfo?.wheelBase}</td>
            </tr>
            <tr>
              <td>AirBags: </td>
              <td>{productInfo?.airBags}</td>
            </tr>
            <tr>
              <td>Category: </td>
              <td>{productInfo?.category}</td>
            </tr>
            <tr>
              <td>Model: </td>
              <td>{productInfo?.model}</td>
            </tr>
            <tr>
              <td>Segment: </td>
              <td>{productInfo?.segment}</td>
            </tr>
          </tbody>
        </HtmlTable>
      </RightContainer>
    </MainContainer>
  );
};

export default ProductDetailPage;
