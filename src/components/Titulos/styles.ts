import styled from 'styled-components'
import { Fonts, Cores } from '../../styles/styles'
import { Props } from '.'

export const T = styled.p<Props>`
  font-family: ${Fonts.ffElsie};
  font-weight: ${Fonts.fw900};
  color: ${Cores.primaryColor};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
`
