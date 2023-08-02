import * as S from './styles'
import logo from '../../Media/logo.png'
const Menu = () => (
  <S.Header>
    <S.Logo src={logo} alt="Logo" />
    <S.Informacoes>
      <S.InformacoesContente>
        <li>
          <S.Link href="/">Como Fazer</S.Link>
        </li>
        <li>
          <S.Span>/</S.Span>
          <S.Link href="/">Ofertas</S.Link>
        </li>
        <li>
          <S.Span>/</S.Span>
          <S.Link href="/">Depoimentos</S.Link>
        </li>
        <li>
          <S.Span>/</S.Span>
          <S.Link href="/">Vídeos</S.Link>
        </li>
        <li>
          <S.Span>/</S.Span>
          <S.Link href="/">Meu Carrinho</S.Link>
        </li>
      </S.InformacoesContente>
    </S.Informacoes>
  </S.Header>
)

export default Menu
