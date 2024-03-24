import styled from 'styled-components'

export const SContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 7% 10%;
  @media (max-width: 870px) {
    flex-direction: column;
  }
`

export const SImageStyle = styled.div`
  flex: 2;
  flex-direction: column;
`

export const MainPhoto = styled.div`
  display: flex;
  justify-content: center;
`

export const SmallPhoto = styled.div`
  display: inline;
  margin: 0px 20px;
  border: 3px solid #ccc;
  @media (max-width: 570px) {
    display: none;
  }
`
