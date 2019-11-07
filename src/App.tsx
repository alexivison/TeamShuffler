import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'

// API
import { Members } from './api/endpoint'
import { Member } from './api/models/Member'

// Components
import Team from './components/Team'
import ShuffledTeam from './components/ShuffledTeam'

// Res
import ShuffleIcon from './res/icon/shuffle.svg'

const App: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([])
  const [team1, setTeam1] = useState<Member[]>([])
  const [team2, setTeam2] = useState<Member[]>([])
  const [fetching, setFetching] = useState<Boolean>(false)
  const [shuffling, setShuffling] = useState<Boolean>(false)

  const fetchMembers = useCallback(async () => {
    setFetching(true)
    setMembers(await Members.get())
    setFetching(false)
  }, [])

  const shuffleMembers = useCallback(async () => {
    setShuffling(true)
    const { team1, team2 } = await Members.getShuffled()
    setTeam1(team1)
    setTeam2(team2)
    setShuffling(false)
  }, [])

  useEffect(() => {
    fetchMembers()
  }, [fetchMembers])

  return (
    <Container>
      <Team
        members={members}
        onAddMember={fetchMembers}
        onRemoveMember={fetchMembers}
      />
      <ShuffleButton onClick={shuffleMembers} />
      <TeamGrid>
        <Team1 name="Team 1" members={team1} fetching={!shuffling} />
        <Team2 name="Team 2" members={team2} fetching={!shuffling} />
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

const TeamGrid = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr 1fr;
`

const ShuffleButton = styled.div`
  width: 40px;
  height: 40px;
  justify-self: center;
  background-image: url(${ShuffleIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
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
