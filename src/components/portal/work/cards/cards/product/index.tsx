import React from 'react';
import { Card } from 'react-bootstrap';
import {
  SCardImg,
  SCard,
  SButton,
  SCardTitle,
  SCardPromotion,
  SCardPrice,
  SCardInstallments
} from './styled';
import { navigate } from '@reach/router';
import { formatPriceBr } from '../../../../../../util/helpers/format';

interface CardProductProps {
  item: {
    id: string;
    title: string;
    promotion: number;
    price: number;
    photos: string[];
  };
}

const CardProduct: React.FC<CardProductProps> = ({ item }) => {
  const { id, title, promotion, price, photos } = item;

  return (
    <div>
      <SCard>
        {photos?.length > 0 ? <SCardImg src={photos[0]} alt={title} /> : ''}
        <Card.Body>
          <SCardTitle>
            <strong>{title}</strong>
          </SCardTitle>

          {promotion < price ? (
            <>
              <SCardPrice>
                <strong>De:</strong> {formatPriceBr(price)}
              </SCardPrice>

              <SCardPromotion>
                <strong>Por:</strong> {formatPriceBr(promotion)}
              </SCardPromotion>

              <SCardInstallments>
                ou 6x de {formatPriceBr(promotion / 6)} sem juros
              </SCardInstallments>
            </>
          ) : (
            <>
              <SCardPrice>
                <strong>Preço:</strong> {formatPriceBr(price)}
              </SCardPrice>

              <SCardInstallments>
                ou 6x de {formatPriceBr(price / 6)} sem juros
              </SCardInstallments>
            </>
          )}
          <SButton onClick={() => navigate(`/product/${id}`)}>Adquirir</SButton>
        </Card.Body>
      </SCard>
    </div>
  );
};

export default CardProduct;