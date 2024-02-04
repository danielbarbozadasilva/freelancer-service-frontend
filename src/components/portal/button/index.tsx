import * as React from 'react';
import { IProps } from './types';
import { SButton } from './styled';

const BasicButton: React.FC<IProps>=({ title })=>{
  return (
      <SButton>{title}</SButton>
  );
}

export default BasicButton