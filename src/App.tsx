import React, { useState } from 'react'
import styled from 'styled-components'

import { Member } from './models/Member'

import Team from './components/Team'
import ShuffledTeam from './components/ShuffledTeam'

const App: React.FC = () => {
  const [fetching, setFetching] = useState(false)

  const dummyMembers1: Member[] = [{ id: 1, name: "アレク" }, { id: 5, name: "谷川" }, { id: 6, name: "赤石" }, { id: 7, name: "加瀬" }]
  const dummyMembers2: Member[] = [{ id: 2, name: "中里" }, { id: 3, name: "野口" }, { id: 4, name: "五十嵐" }, { id: 8, name: "西川" }]
  const dummyMembers3: Member[] = [...dummyMembers1, ...dummyMembers2]

  const callApi = () => {
    setFetching(true)
    fetch('http://localhost:8080/todos')
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(error => console.error(error))
    setFetching(false)
  }

  return (
    <Container>
      <Title>Team Shuffler</Title>
      <Team members={dummyMembers3} />
      <TeamGrid>
        <Team1 name="Team 1" members={dummyMembers1} />
        <Team2 name="Team 2" members={dummyMembers2} />
      </TeamGrid>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-gap: 24px;
  height: 100vh;
  align-content: center;
  justify-content: center;
`

const Title = styled.div`
  font-size: 32px;
`

const TeamGrid = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr 1fr;
`

const Team1 = styled(ShuffledTeam)`
  color: rgba(255, 0, 0, 0.3);
  background-color: rgba(255, 0, 0, 0.2);
`

const Team2 = styled(ShuffledTeam)`
  color: rgba(0, 0, 255, 0.3);
  background-color: rgba(0, 0, 255, 0.2);
`

export default App
