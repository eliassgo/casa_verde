import styled from 'styled-components'
import { Fonts, Cores } from '../../styles/styles'

export const Header = styled.header`
  display: flex;
  max-width: 100%;
  padding-top: 20px;
  justify-content: space-between;
`
export const Logo = styled.img``

export const Informacoes = styled.nav`
  display: flex;
  align-items: flex-end;
  font-size: ${Fonts.fs5};
  font-family: ${Fonts.ffMontserrat};
  font-wight: ${Fonts.fw400};
  color: ${Cores.primaryColor};
`

export const InformacoesContente = styled.ul`
  display: inline-flex;
  li {
    padding: 0 8px;
  }
`
export const Span = styled.span`
  padding-right: 8px;
`
