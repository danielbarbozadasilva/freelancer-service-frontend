import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { Title } from './styled'

interface HeadProps {
  title: string
  actions: React.ComponentType
}

const Head: React.FC<HeadProps> = ({ title, actions: Actions }) => {
  return (
    <Title>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="subtitle1">
        <Actions />
      </Typography>
    </Title>
  )
}

Head.propTypes = {
  title: PropTypes.string.isRequired
}

export default Head
