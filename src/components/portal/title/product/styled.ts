import { Box } from '@material-ui/core'
import styled from 'styled-components'

export const Title = styled(Box)`
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  margin: 4% 8.3%;
  @media (max-width: 700px) {
    margin: 15px;
  }
`
