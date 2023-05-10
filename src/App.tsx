import temaBase from './Tema/standart'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import ResetCSS, { Container } from './styles'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={temaBase}>
      <ResetCSS />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
