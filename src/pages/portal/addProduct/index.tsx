import React from "react";
import "./styled.scss";
import { PageTitle } from "./types";
import { Helmet } from "react-helmet";
import AddProduct from "../../../components/portal/addProduct";

const AddProductPage: React.FC<PageTitle> = ({ title }) => { 
  return (
    <>
      <Helmet title={title} />
      <AddProduct />
    </>
  );
};

export default AddProductPage;
