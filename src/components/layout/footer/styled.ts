import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SLink = styled(Link)`
  font-size: 16px;
  font-family: 'Roboto';
  color: #666666;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #666666;
  }
`;