import styled from 'styled-components'
import { Fonts, Cores } from '../../styles/styles'
import Imagem from '../../Media/imagem-hero.png'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 100%;
  width: 50%;
  margin-top: 100px;

  @media (max-width: 760px) {
    width: 80%;
    margin: 0 auto;
    padding-top: 212px;
  }
  :after {
    content: '';
    display: block;
    width: 912px;
    height: 975px;
    background-image: url(${Imagem});
    position: absolute;
    --baseDistance: -56px;
    top: calc(var(--baseDistance) + 50px);
    right: 0;
    z-index: -1;
    pointer-events: none;

    @media (max-width: 760px) {
      background-size: 300px;
      background-repeat: no-repeat;
      right: 1;
      left: 56px;
      --baseDistance: 57px;
    }
  }
`

export const Div = styled.div`
  padding: 20px 0;
  @media (max-width: 760px) {
    padding: 0;
  }
`
export const DivTitulo = styled.div`
  padding: 20px 0;
  @media (max-width: 760px) {
    font-size: 24px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 75px;
  margin-top: 20px;
`
export const Input = styled.input`
  width: 60%;
  text-align: center;
  font-family: ${Fonts.ffMontserrat};
  font-size: ${Fonts.fs5};
  font-weight: ${Fonts.fw400};
  color: ${Cores.primaryColor};
`
export const Button = styled.button`
  width: 40%;
  font-family: ${Fonts.ffMontserrat};
  font-size: ${Fonts.fs5};
  font-weight: ${Fonts.fw400};
  color: #fff;
  background-color: ${Cores.secundaryColor};
  padding: 8px;
`
// export const Imagem = styled.img`
//   position: absolute;
//   top: -15px;
//   left: 513px;
// `
