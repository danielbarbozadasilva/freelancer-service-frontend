import React from 'react';
import { listAllProductsAction } from '../../../store/product/product.action';
import { Select } from '@material-ui/core';
import { SBox, STitle } from './styled';
import { useAppDispatch, useAppSelector } from '../../../hooks';

const FilterProduct: React.FC = () => {
  const sort = useAppSelector((state) => state.product.all)
  const dispatch = useAppDispatch()

  const handleChange = async (event: React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target;
    // dispatch(listAllProductsAction(null, null, value as string));
  };

  return (
    <SBox>
      <STitle>Ordenar</STitle>
      <div>
        <Select native defaultValue={sort} onChange={handleChange}>
          <option value="selecione">selecione</option>
          <option value="alfabetica_a-z">Ordem alfabética crescente</option>
          <option value="alfabetica_z-a">Ordem alfabética decrescente</option>
          <option value="price-crescente">Menor preço</option>
          <option value="price-decrescente">Maior preço</option>
        </Select>
      </div>
    </SBox>
  );
};

export default FilterProduct;