import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { SForm, STextForm } from '../styled'
import { PageError } from '../types'

const Error403: React.FC<PageError> = ({ title }) => {
  return (
    <Container>
      <Helmet title={title} />

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <SForm>
            <STextForm>Erro 403</STextForm>
            <h5>Você não possui permissão para acessar esse conteúdo!</h5>
          </SForm>
        </Col>
      </Row>
    </Container>
  )
}
export default Error403
