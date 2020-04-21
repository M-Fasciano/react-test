import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: #000;
  color: #fff;
  min-height: 200px;
  padding: 20px;

  @media (min-width: 1024px) {
    padding-left: 230px;
  }
`

const Footer = props => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
  })

  return (
    <StyledFooter 
      id="footer" 
      ref={ref} 
      data-visible={inView
    }>
      <p>Size: {props.height}px</p>
      <h1>{`Footer inside viewport ${inView}.`}</h1>
      <p>Lorem ipsum amet simet</p>
      <p>Lorem ipsum amet simet</p>
    </StyledFooter>
  )
}

export default Footer
