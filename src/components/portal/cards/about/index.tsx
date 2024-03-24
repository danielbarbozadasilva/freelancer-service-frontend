import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { RiChatQuoteFill } from 'react-icons/ri'
import ImgClient01 from '../../../../assets/img/cards/1.jpg'
import ImgClient02 from '../../../../assets/img/cards/2.jpg'
import ImgClient03 from '../../../../assets/img/cards/3.jpg'
import Stars from '../../../../assets/img/cards/stars.jpg'
import {
  SCard,
  SCardImg,
  SCardService,
  SCardName,
  SCardText,
  SCardStar
} from './styled'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'justify',
    boxShadow: 'none',
    color: '#473F57',
    '@media (max-width: 1980px)': {
      margin: '2% auto'
    },
    '@media (max-width: 1200px)': {
      flexDirection: 'column'
    }
  },
  card: {
    backgroundColor: '#fff',
    margin: '80px',
    border: '0.5px solid #ccc',
    '@media (max-width: 1150px)': {
      margin: '20px'
    }
  },
  title: {
    fontSize: 18,
    color: '#501417'
  },
  text: {
    marginBottom: 12
  }
})

const CardAbout = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
        <SCard className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              <RiChatQuoteFill />
            </Typography>

            <SCardService>
              <div>
                <SCardImg src={ImgClient01} alt="" />
              </div>
              <SCardName>
                <h4>Beatriz Barboza</h4>
                <h5>Freelancer</h5>
              </SCardName>
            </SCardService>

            <SCardText>
              <Typography className={classes.text} color="textSecondary">
                A plataforma é fácil de usar, o seu design é limpo e simples. A
                equipe de suporte é ótima, minhas solicitações foram sempre
                atendidas. Foi o que me motivou a utilizá-la. Recomendo a todos.
              </Typography>
            </SCardText>

            <SCardStar>
              <img src={Stars} alt="" />
            </SCardStar>
          </CardContent>
        </SCard>

        <SCard className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              <RiChatQuoteFill />
            </Typography>

            <SCardService>
              <div>
                <SCardImg src={ImgClient02} alt="" />
              </div>
              <SCardName>
                <h4>Rodrigo Gomes</h4>
                <h5>Cliente</h5>
              </SCardName>
            </SCardService>

            <SCardText>
              <Typography className={classes.text} color="textSecondary">
                Comecei a usar a plataforma a um mês atrás, gostei bastante.
                Estou investindo muito, a plataforma é fácil e intuitiva.
                Recomendo a todos. A equipe de suporte é ótima, minhas
                solicitações foram sempre atendidas.
              </Typography>
            </SCardText>

            <SCardStar>
              <img src={Stars} alt="" />
            </SCardStar>
          </CardContent>
        </SCard>

        <SCard className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              <RiChatQuoteFill />
            </Typography>

            <SCardService>
              <div>
                <SCardImg src={ImgClient03} alt="" />
              </div>
              <SCardName>
                <h4>Debora Alcantara</h4>
                <h5>Cliente</h5>
              </SCardName>
            </SCardService>

            <SCardText>
              <Typography className={classes.text} color="textSecondary">
                A equipe de suporte é ótima, minhas solicitações foram sempre
                atendidas. gostei bastante da plataforma. Estou usando a 3
                meses, e estou muito entusiasmado. Vou continuar a usar.
                Recomendo!
              </Typography>
            </SCardText>

            <SCardStar>
              <img src={Stars} alt="" />
            </SCardStar>
          </CardContent>
        </SCard>
      </div>
    </>
  )
}
export default CardAbout
