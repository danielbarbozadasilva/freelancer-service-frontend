import styled from 'styled-components'

export const SCard = styled.div`
  width: 252px;
  height: 344px;
  color: rgb(236, 221, 221);
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  :hover {
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253) !important;
    transition: 1s;
    opacity: 0.5;
  }
`

export const SCardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(60%);
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
  text-decoration: line-through;
`

export const SCardTitle = styled.h1`
  position: absolute;
  top: 40px;
  left: 25px;
  right: 25px;
  font-size: 24px;
  word-spacing: 1px;
  font-weight: 500;
`
