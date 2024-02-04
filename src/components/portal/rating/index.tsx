import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { RiChatQuoteFill } from 'react-icons/ri'
import { SRating } from './styled'
import { IProps } from './types'
import { useStyles } from './form/styled'

const Reviews: React.FC<IProps> = ({ data }) => {
  const classes = useStyles()

  return (
    <>
      {data?.length ? (
        <Card className={classes.root}>
          {data?.map((item, index) => (
            <div key={index} className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  <RiChatQuoteFill />
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  {item.name}
                </Typography>
                <Typography className={classes.text} color="textSecondary">
                  {item.text}
                </Typography>
                <Typography className={classes.text} color="textSecondary">
                    <SRating name="simple-controlled" value={item.score} />
                </Typography>
              </CardContent>
            </div>
          ))}
        </Card>
      ) : (
        <Typography className={classes.notFound} color="textSecondary">
          Nenhuma avaliação
        </Typography>
      )}
    </>
  )
}

export default Reviews
