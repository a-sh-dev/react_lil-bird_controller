import { Footer } from './components/Footer'
import { Game } from './components/Game'
import { StyledLayoutWrapper } from './styles/styled'

function App() {
  return (
    <StyledLayoutWrapper>
      <Game />
      <Footer />
    </StyledLayoutWrapper>
  )
}

export default App
