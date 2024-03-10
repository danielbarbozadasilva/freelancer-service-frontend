import React from 'react';
import { Card } from 'react-bootstrap'
import { SCardImg, SCard, SCardTitle } from './styled'
import { useNavigate } from 'react-router-dom'
import { CatCardProps } from './types';

const CardCategory: React.FC<CatCardProps> = ({ item }) => {
  const { id, name, picture } = item
  const navigate = useNavigate()
  return (
    <div>
      <SCard onClick={() => navigate(`/category/${id}`)}>
        {picture ? <SCardImg src={picture} /> : ''}
        <Card.Body>
          <SCardTitle>
            <strong>{name}</strong>
          </SCardTitle>
        </Card.Body>
      </SCard>
    </div>
  )
}
export default CardCategory