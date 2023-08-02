import styled, { createGlobalStyle } from 'styled-components'
import Vetor from '../Media/Vector.png'

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  list-style: none;
}

a, button, input {
  transition: .3s ease-in-out;
}

button {
  cursor: pointer;
}

a:hover,
a:focus,
button:hover,
button:focus {
    opacity: .5;
}

body {
  background-image: url(${Vetor});
  background-repeat: no-repeat;
  background-position: right top;
  @media (max-width: 760px) {
    background-size: 400px;
      background-repeat: no-repeat;
  }
}
`
export default EstiloGlobal

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
export const Fonts = {
  ffElsie: "'Elsie Swash Caps', cursive",
  ffMontserrat: "'Montserrat', sans-serif;",
  fw900: 900,
  fw400: 400,
  fs1: '82px',
  fs2: '42px',
  fs3: '32px',
  fs4: '22px',
  fs5: '16px'
}

export const Cores = {
  primaryColor: '#202020',
  secundaryColor: '#FFCB47'
}
