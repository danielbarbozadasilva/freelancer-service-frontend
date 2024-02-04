import { Box } from '@material-ui/core'
import styled from 'styled-components'

export const Title = styled(Box)`
  font-weight: 600;
  margin: 0px 145px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  @media (max-width: 700px) {
    margin: 15px;
  }
`