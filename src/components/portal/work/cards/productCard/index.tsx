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
import { navigate } from '@reach/router'
import { formatPriceBr } from '../../../../../util/helpers/format'
import { ProductCardProps } from './types'

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  return (
    <SCard>
      {item.data.images?.length > 0 ? <SCardImg src={item.data.images} /> : ''}
      <Card.Body>
        <SCardTitle>
        <strong>{item.data.title}</strong>
        </SCardTitle>
        <SCardDescription>
          {item.data.description}        
        </SCardDescription>
        <br />
        <SCardFeatures>
          {`# ${item.data.features?.join(', #')}`}
        </SCardFeatures>
        <SCardPrice>
          <strong>Preço:</strong> {formatPriceBr(item.data.price)}
        </SCardPrice>
        <SCardInstallments>
          ou 6x de {formatPriceBr(item.data.price / 6)} sem juros
        </SCardInstallments>
        <SButton onClick={() => navigate(`/product/${item.data._id}`)}>
          Solicitar
        </SButton>
      </Card.Body>
    </SCard>
  )
}

export default ProductCard
