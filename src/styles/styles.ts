import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
`
export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
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
