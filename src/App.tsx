import EstiloGlobal from './styles/styles'
import { Container } from './styles/styles'
import Menu from './components/Menu'
import AssinaturaNewsletter from './components/Home'
import ImagemHome from './components/ImageHome'

function App() {
  return (
    <>
      <EstiloGlobal />
      <ImagemHome />
      <Container>
        <Menu />
        <AssinaturaNewsletter />
      </Container>
    </>
  )
}

export default App
// npm i
// npm i --save styled-components
// npm install --save-dev @types/styled-components
// npm i --save react-redux @reduxjs/toolkit
// npm install @types/react --save-dev
