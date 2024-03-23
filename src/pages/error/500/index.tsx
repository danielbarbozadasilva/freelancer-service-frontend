import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { SForm, STextForm } from '../styled'
import { PageError } from '../types'

const Error500: React.FC<PageError> = ({ title }) => {
  return (
    <Container>
      <Helmet title={title} />

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <SForm>
            <STextForm>Erro 500</STextForm>
            <h5>Ocorreu um erro no servidor interno.</h5>
            <br />
            <h5>Por favor tente novamente mais tarde!</h5>
          </SForm>
        </Col>
      </Row>
    </Container>
  )
}
export default Error500
