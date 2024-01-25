import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { SContainer, SFormSelect, TextSelect } from './styled';
import { PaginationSelectorProps } from '../types';

const PaginationSelector: React.FC<PaginationSelectorProps> = ({ itensPerPage, setItensPerPage }) => {
  const handleSelectChange = (e: any) => {
    setItensPerPage(Number(e.target.value));
  };

  return (
    <SContainer>
      <TextSelect>Itens por página:</TextSelect>
      <SFormSelect
        value={itensPerPage}
        onChange={handleSelectChange}
      >
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
      </SFormSelect>
    </SContainer>
  );
};

export default PaginationSelector;