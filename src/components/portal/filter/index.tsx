import React from 'react'
import { listAllProductsAction } from '../../../store/product/product.action'
import Form from 'react-bootstrap/Form';
import { SBox, STitle, SOrderContainer } from './styled'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { Filters, IProductFilter } from './types'
import { listSort } from '../../../store/product/product.reducer'

const FilterProduct: React.FC<IProductFilter> = ({ id }) => {
  const sort = useAppSelector((state) => state.product.sort)
  const dispatch = useAppDispatch()

  const handleChange = async (event: React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target
    const filters: Filters = {
      category: String(id),
      offset: 0,
      limit: 10,
      search: '',
      order: String(value),
      userId: ''
    }
    dispatch(listAllProductsAction(filters))
    dispatch(listSort(value))
  }

  return (
    <SBox>
      <STitle>Ordenar</STitle>
      <SOrderContainer>
        <Form.Select defaultValue={sort} onChange={handleChange}>
          <option value="selecione">selecione</option>
          <option value="alfabetica_a-z">Ordem alfabética crescente</option>
          <option value="alfabetica_z-a">Ordem alfabética decrescente</option>
          <option value="price-crescente">Menor preço</option>
          <option value="price-decrescente">Maior preço</option>
        </Form.Select>
      </SOrderContainer>
    </SBox>
  )
}

export default FilterProduct
