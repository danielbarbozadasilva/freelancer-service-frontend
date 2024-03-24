import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { updateOrderAction } from '../../../../store/order/order.action'
import { useAppDispatch } from '../../../../hooks'
import { PageTitle } from './types'
import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { SForm, STextForm, SImageStyle, SButton } from './styled'
import paymentSuccess from '../../../../assets/img/payment-success.png'

const PaymentSucessPage: React.FC<PageTitle> = ({ title }) => {
  const { search } = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const params = new URLSearchParams(search)
  const payment_intent = params.get('payment_intent')

  useEffect(() => {
    if (payment_intent) {
      dispatch(updateOrderAction(payment_intent))
    }
  }, [dispatch])

  return (
    <Container>
      <Helmet title={title} />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <SForm>
            <SImageStyle src={paymentSuccess}></SImageStyle>
            <STextForm>Pedido concluído com sucesso!</STextForm>
            <h5>
              O seu pagamento está sendo processado e você receberá uma
              confirmação por e-mail em breve.
            </h5>
            <SButton onClick={() => navigate('/')}>
              Voltar a página inicial
            </SButton>
          </SForm>
        </Col>
      </Row>
    </Container>
  )
}
export default PaymentSucessPage
