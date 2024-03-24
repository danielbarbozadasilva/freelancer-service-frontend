import styled from 'styled-components'

export const SCardImg = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px 20px;
  border-radius: 50% 50% 50% 50%;
  -webkit-border-radius: 50% 50% 50% 50%;
  -moz-border-radius: 50% 50% 50% 50%;
  -webkit-transition: all 400ms !important;
  transition: all 400ms !important;
`

export const SCardService = styled.div`
  display: flex;
  margin-bottom: 3%;
`

export const SCardName = styled.div`
  padding-top: 35px;
  padding-left: 10px;
`

export const SCardText = styled.div`
  padding: 10px 15px;
`

export const SCardStar = styled.div`
  text-align: left;
  padding-top: 10px;
  padding-bottom: 45px;
  padding-left: 15px;
`

export const SCard = styled.div`
  border: 1px solid #dcdcdc;
  border-radius: 0em 5em 0em 5em;
  -webkit-border-radius: 0em 5em 0em 5em;
  -moz-border-radius: 0em 5em 0em 5em;
  padding: 7px 7px 45px;
  position: relative;
  background-color: #fff;
  box-shadow: -1px 1px 0 #dcdcdc;
  height: 480px;
  width: 400px;
  text-align: center;
  margin: 50px 100px;
  :hover {
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253) !important;
    transition: 1s;
    opacity: 0.5;
  }
  @media screen and (max-width: 1700px) {
    margin: 3% auto;
  }
`
