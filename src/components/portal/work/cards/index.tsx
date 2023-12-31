import { Card } from 'react-bootstrap'
import { SCardImg, SCard, SButton } from './styled'
import { useNavigate } from 'react-router-dom'

interface data {
  item:any
}

const CardCategory: React.FC<data> = (props: any) => {
  const { name, description, picture } = props.item
  return (
    <div>
      <SCard>
        {picture?.length > 0 ? <SCardImg src={picture} /> : ''}
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          {/* <SButton onClick={() => navigate(`/signin`)}>
            Adiquirir
          </SButton> */}
        </Card.Body>
      </SCard> 
    </div>
  )
}
export default CardCategory
