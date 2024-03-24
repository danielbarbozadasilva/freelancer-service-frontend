import React from 'react'
import { Title } from './styled'
import { TitleSectionProps } from './types'

const TitleSection: React.FC<TitleSectionProps> = ({ text }) => {
  return <Title>{text}</Title>
}

export default TitleSection
