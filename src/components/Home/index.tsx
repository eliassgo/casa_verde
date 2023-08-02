import * as S from './styles'
import { T } from '../Titulos/styles'
import { P } from '../Paragrafo/styles'
import { Fonts } from '../../styles/styles'

const AssinaturaNewsletter = () => (
  <S.Main>
    <S.Div>
      <P fontSize={Fonts.fs4}>Sua casa com as</P>
    </S.Div>
    <S.DivTitulo>
      <T fontSize={Fonts.fs1}>melhores plantas</T>
    </S.DivTitulo>
    <S.Div>
      <P fontSize={Fonts.fs5}>
        Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
        torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e
        assine nossa newsletter para saber das novidades da marca.
      </P>
    </S.Div>
    <S.InputContainer>
      <S.Input type="text" placeholder="insira seu e-mail" />
      <S.Button type="submit">Assinar newsletter</S.Button>
    </S.InputContainer>
  </S.Main>
)

export default AssinaturaNewsletter
