import styled from 'styled-components'
import { Fonts, Cores } from '../../styles/styles'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 100%;
  width: 50%;
  margin-top: 100px;
`

export const Div = styled.div`
  padding: 20px 0;
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
export const Imagem = styled.img`
  position: absolute;
  top: -15px;
  left: 513px;
`
