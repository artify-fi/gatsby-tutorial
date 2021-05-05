import React from 'react'
import styled from 'styled-components'
import phone from '../../assets/images/phone_mockup.jpg'
import { StaticImage } from 'gatsby-plugin-image'

const Images = () => {
  return (
    <Wrapper>
      <StaticImage
        src='../../assets/images/phone_mockup.jpg'
        alt='phone' />
      <h2>This is Images component</h2>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    width: 200px;
  }
`

export default Images
