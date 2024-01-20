import React from "react";
import { Helmet } from "react-helmet";
import Orders from "../../../components/portal/orders";
import { PageTitle } from "./types";

const OrdersPage: React.FC<PageTitle> = ({ title }) => {
  return (
    <>
      <Helmet title={title} />
      <Orders />
    </>
  )
};

export default OrdersPage;
