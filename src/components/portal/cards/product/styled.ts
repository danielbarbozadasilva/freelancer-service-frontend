import styled from 'styled-components'

export const SCard = styled.div`
  text-align: center;
  border: 1px solid #dcdcdc;
  padding: 7px 7px 45px;
  position: relative;
  background-color: #fff;
  box-shadow: -1px 1px 0 #dcdcdc;
  height: 460px;
  width: 310px;
  margin: 50px auto;
  :hover {
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253) !important;
    transition: 1s;
    opacity: 0.5;
  }
`

export const SCardTitle = styled.div`
  font-size: 18px;
  width: 280px;
  height: 55px;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const SCardDescription = styled.div`
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 65px;

`

export const SCardFeatures = styled.div`
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const SCardImg = styled.img`
  width: 293px;
  height: 150px;
  object-fit: cover;
`

export const SButton = styled.button`
  position: absolute;
  bottom: -18px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #fff;
  background-color: #473f57;
  line-height: 38px;
  text-transform: uppercase;
  padding: 0 15px;
  border: none;
  font-weight: 500;
  font-size: 12px;
  display: inline-flex;
  align-items: center;

  :hover {
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253) !important;
    transition: 1s;
    opacity: 0.5;
  }
`

export const SCardPrice = styled.h6`
  padding-top: 7%;
`

export const SCardInstallments = styled.h6`
  padding-top: 2%;
`
