import React from 'react'
import { Row } from 'react-bootstrap'
import {
  ColCopyright,
  FooterName,
  SContainerCopyright
} from './styled'

const Footer: React.FC = () => {
  return (
    <>  
      <SContainerCopyright fluid>
        <Row>
          <ColCopyright>
            <FooterName>Developed by Daniel Barboza da Silva</FooterName>
            <FooterName>
              Copyright © 2024 - Todos os direitos reservados
            </FooterName>
          </ColCopyright>
        </Row>
      </SContainerCopyright>
    </>
  )
}

export default Footer
