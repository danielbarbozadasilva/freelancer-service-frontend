import { Card } from 'react-bootstrap'
import {
  SCardImg,
  SCard,
  SButton,
  SCardTitle,
  SCardDescription,
  SCardFeatures,
  SCardPrice,
  SCardInstallments
} from './styled'
import { formatPriceBr } from '../../../../util/helpers/format'
import { ProductCardProps } from './types'
import { Link } from 'react-router-dom'

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  return (
    <SCard>
      {item.data.images?.length !== 0 ? <SCardImg src={item.data.images[0]} /> : ''}
      <Card.Body>
        <SCardTitle>
          <strong>{item.data.title}</strong>
        </SCardTitle>
        <SCardDescription>{item.data.description}</SCardDescription>
        <br />
        <SCardFeatures>{`# ${item.data.features?.join(', #')}`}</SCardFeatures>
        <SCardPrice>
          <strong>Preço:</strong> {formatPriceBr(item.data.price)}
        </SCardPrice>
        <SCardInstallments>
          ou 6x de {formatPriceBr(item.data.price / 6)} sem juros
        </SCardInstallments>
        <Link to={`/product/${item.data.id}`}>
          <SButton>Solicitar</SButton>
        </Link>
      </Card.Body>
    </SCard>
  )
}

export default ProductCard
