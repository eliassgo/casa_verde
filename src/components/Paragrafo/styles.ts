import styled from 'styled-components'
import { Fonts, Cores } from '../../styles/styles'
import { Props } from '.'

export const P = styled.p<Props>`
  font-family: ${Fonts.ffMontserrat};
  font-weight: ${Fonts.fw400};
  color: ${Cores.primaryColor};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
`
