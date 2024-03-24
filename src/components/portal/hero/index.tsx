import React, { useState } from 'react'
import { SContainer, SImageStyle, MainPhoto, SmallPhoto } from './styled'
import { Props } from './types'

const Hero: React.FC<Props> = (props) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | undefined>()
  const { images } = props.data

  return (
    <>
      <SContainer>
        <SImageStyle>
          <MainPhoto>
            {images?.length > 0 ? (
              <img src={selectedPhoto || images[0]} width="100%" alt="Main" />
            ) : (
              ''
            )}
          </MainPhoto>
          {images?.map((data, index) => (
            <SmallPhoto key={index} onClick={() => setSelectedPhoto(data)}>
              <img
                src={data}
                width="10%"
                alt={`Thumbnail-${index}`}
                style={{ marginTop: '10px' }}
              />
            </SmallPhoto>
          ))}
        </SImageStyle>
      </SContainer>
    </>
  )
}

export default Hero
