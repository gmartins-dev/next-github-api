import type { NextPage } from 'next'
import { useState } from 'react'
import styled from 'styled-components'
import Header from '../src/components/Header'
import { UserData } from '../src/components/UserData'
import { UserProps } from '../src/types'


const Home: NextPage = () => {

  const [user, setUser] = useState<UserProps | null>(null)

  function setUserData (user: UserProps | null): void {
    setUser(user)
  }

  return (
      <Container>
        <Header setUser={setUserData} />
        {user && <UserData user={user} />}
      </Container>
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
