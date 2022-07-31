import type { NextPage } from 'next'
import { useState } from 'react'
import * as C from '../styles/HomeStyles'
import Header from '../src/components/Header'
import { UserData } from '../src/components/UserData'
import { UserProps } from '../src/types'


const Home: NextPage = () => {

  const [user, setUser] = useState<UserProps | null>(null)

  function setUserData (user: UserProps | null): void {
    setUser(user)
  }

  return (
      <C.Container>
        <Header setUser={setUserData} />
        {user && <UserData user={user} />}
      </C.Container>
  )
}

export default Home
