import React from "react";
import "./styled.scss";
import { IProduct, PageTitle } from "./types";
import { Helmet } from "react-helmet";
import AddProduct from "../../../components/portal/addProduct";
import { useAppDispatch } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import { createProductAction } from "../../../store/product/product.action";

const AddProductPage: React.FC<PageTitle> = ({ title }) => { 
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const submitForm = async (form: IProduct) => {
      dispatch(createProductAction(form))
      navigate('/')
  }

  return (
    <>
      <Helmet title={title} />
      <AddProduct submit={submitForm}/>
    </>
  );
};

export default AddProductPage;
