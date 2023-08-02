import styled from 'styled-components'
import { Fonts, Cores } from '../../styles/styles'

export const Header = styled.header`
  display: flex;
  max-width: 100%;
  padding-top: 20px;
  justify-content: space-between;
  @media (max-width: 760px) {
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: center;
  }
`
export const Logo = styled.img``

export const Informacoes = styled.nav`
  display: flex;
  align-items: flex-end;
  @media (max-width: 760px) {
    margin-top: 10px;
  }
`

export const InformacoesContente = styled.ul`
  display: inline-flex;
  @media (max-width: 760px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
  li {
    padding: 0 8px;
  }
`
export const Span = styled.span`
  padding-right: 8px;

  @media (max-width: 760px) {
    display: none;
  }
`
export const Link = styled.a`
  font-size: ${Fonts.fs5};
  font-family: ${Fonts.ffMontserrat};
  font-wight: ${Fonts.fw400};
  color: ${Cores.primaryColor};
  transition: 0.3s ease-in-out;
  opacity: 0.5;
  text-decoration: none;
  line-height: 1.1;
  font-size: inherit;

  @media (max-width: 760px) {
    border-bottom: 1px solid;
  }
`
