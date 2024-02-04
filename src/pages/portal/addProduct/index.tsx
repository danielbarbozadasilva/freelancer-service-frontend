import React from "react";
import "./styled.scss";
import { IProduct, PageTitle } from "./types";
import { Helmet } from "react-helmet";
import AddProduct from "../../../components/portal/addProduct";
import { useAppDispatch } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import { createProduct, finishLoadingProduct, loadingProduct } from "../../../store/product/product.reducer";
import { createProductAction } from "../../../store/product/product.action";

const AddProductPage: React.FC<PageTitle> = ({ title }) => { 
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const submitForm = async (form: IProduct) => {
    dispatch(loadingProduct())
    await createProductAction(form).then(() => {
      dispatch(createProduct())
      navigate('/')
      dispatch(finishLoadingProduct())
    })
  }

  return (
    <>
      <Helmet title={title} />
      <AddProduct submit={submitForm}/>
    </>
  );
};

export default AddProductPage;
