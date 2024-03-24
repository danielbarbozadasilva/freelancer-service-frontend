import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SLink = styled(Link)`
  text-decoration: none;
  color: #555;
  &:hover {
    color: #555;
    transition: 0.5s ease-out;
    text-decoration: underline;
  }
`

export const SContainerRating = styled.div`
  margin-left: 38px;
  margin-top: -20px;
`
