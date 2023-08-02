import * as S from './styles'
import logo from '../../Media/logo.png'
const Menu = () => (
  <S.Header>
    <S.Logo src={logo} alt="Logo" />
    <S.Informacoes>
      <S.InformacoesContente>
        <li>Como Fazer</li>
        <li>
          <S.Span>/</S.Span>Ofertas
        </li>
        <li>
          <S.Span>/</S.Span>Depoimentos
        </li>
        <li>
          <S.Span>/</S.Span>Videos
        </li>
        <li>
          <S.Span>/</S.Span>Meu Carrinho
        </li>
      </S.InformacoesContente>
    </S.Informacoes>
  </S.Header>
)

export default Menu
