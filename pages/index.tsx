import type { NextPage } from 'next'
import styled from 'styled-components'
import TopArea from '../src/components/TopArea'
import { ThemeContextProvider } from '../src/contexts/ThemeContext'


const Home: NextPage = () => {
  return (
    <ThemeContextProvider>
      <Container>
        <h1>testeeeew</h1>
        <TopArea/>
      </Container>
    </ThemeContextProvider>
  )
}

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.background};
  padding: 3.1rem 2.4rem;
  @media (min-width: 768px) {
    padding: 3.1rem 7rem;
  }
`;

export default Home
