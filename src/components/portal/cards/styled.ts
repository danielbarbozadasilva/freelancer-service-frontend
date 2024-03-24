import styled from 'styled-components'
const img = require('../../../assets/img/work.jpg')

export const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }
  ]
}

export const ContainerAssets = styled.div`
  font-family: 'Nunito', Helvetica, Arial, Lucida, sans-serif;
  width: 60%;
  margin: 60px auto;
`

export const SCard = styled.div`
  border: 1px solid #dcdcdc;
  position: relative;
  background-color: #fff;
  box-shadow: -1px 1px 0 #dcdcdc;
  width: 310px;
  text-align: center;
  margin: 20px auto;
  :hover {
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253) !important;
    transition: 1s;
    opacity: 0.5;
  }
`

export const SContainer = styled.div`
  font-family: 'Nunito', Helvetica, Arial, Lucida, sans-serif;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export const SCardImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

export const SCardText = styled.div`
  position: absolute;
  top: 90px;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px;
`

export const StyleImg = styled.img`
  background-position: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 550px;
`

export const ContainerImage = styled.div`
  margin-bottom: 100px;
`

export const SButtonTitle = styled.button`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #fff;
  background-color: #c79c60;
  line-height: 38px;
  padding: 0 18px;
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

export const ContainerFinancial = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  margin: 120px 0px;
`

export const ContainerText = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 370px;
  flex: 1;
`

export const TextInvestiment = styled.div`
  margin-top: 0;
  color: #ebebeb;
  text-align: center;
  margin-top: 150px;
`

export const ContainerResources = styled.div`
  position: relative;
  margin: 6% 0%;
  width: 100%;
`

export const ContainerTitle = styled.div`
  width: 100%;
  top: 7%;
  position: absolute;
  z-index: 100;
`

export const TextTitle = styled.div`
  font-weight: 500;
  word-wrap: break-word;
  margin-bottom: 50px;
  color: #ebebeb;
  text-align: center;
`

export const STextInvest = styled.div`
  margin: 80px 0px;
  text-align: center;
  @media screen and (max-width: 420px) {
    margin: 30px 15px;
  }
`

export const ContainerCards = styled.div`
  font-family: 'Nunito', Helvetica, Arial, Lucida, sans-serif;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
`

export const SButtonAbout = styled.button`
  text-align: center;
  color: #fff;
  background-color: #c79c60;
  line-height: 38px;
  padding: 0 18px;
  margin: 15px 0px;
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
export const SContainerPagination = styled.div`
  margin: 0px 8% 2% 8%;
`
