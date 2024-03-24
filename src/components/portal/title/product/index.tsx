import React from 'react'
import { Title } from './styled'
import { TitleSectionProps } from '../types'

const TitleSection: React.FC<TitleSectionProps> = ({ title }) => {
  return <Title>{title}</Title>
}

export default TitleSection
