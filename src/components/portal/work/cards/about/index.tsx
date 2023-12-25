import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { RiChatQuoteFill } from 'react-icons/ri'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'justify',
    boxShadow: 'none',
    '@media (max-width: 800px)': {
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
    <Card className={classes.root}>
      <div className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            <RiChatQuoteFill />
          </Typography>

          <Typography className={classes.text} color="textSecondary">
            A plataforma é fácil de usar, o seu design é limpo e simples. A
            equipe de suporte é ótima, minhas solicitações foram sempre
            atendidas. Foi o que me motivou a utilizá-la. Recomendo a todos.
          </Typography>

          <Typography variant="body2" component="p">
            Rodrigo Alcantara
          </Typography>
        </CardContent>
      </div>

      <div className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            <RiChatQuoteFill />
          </Typography>

          <Typography className={classes.text} color="textSecondary">
            Comecei a usar a plataforma a um mês atrás, gostei bastante. Estou
            investindo muito, a plataforma é fácil e intuitiva. Recomendo a
            todos. A equipe de suporte é ótima, minhas solicitações foram sempre
            atendidas.
          </Typography>

          <Typography variant="body2" component="p">
            Gabriela Fernandes
          </Typography>
        </CardContent>
      </div>

      <div className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            <RiChatQuoteFill />
          </Typography>

          <Typography className={classes.text} color="textSecondary">
            A equipe de suporte é ótima, minhas solicitações foram sempre
            atendidas. gostei bastante da plataforma. Estou usando a 3 meses, e
            estou muito entusiasmado. Vou continuar a usar. Recomendo!
          </Typography>

          <Typography variant="body2" component="p">
            João Monteiro
          </Typography>
        </CardContent>
      </div>
    </Card>
  )
}
export default CardAbout
