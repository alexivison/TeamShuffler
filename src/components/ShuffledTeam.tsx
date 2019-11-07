import React from 'react'
import styled from 'styled-components'

import { Member } from '../api/models/Member'

import TeamMember from './TeamMember'

interface Props {
  name: string
  members: Member[] | undefined
  className?: string
  fetching?: boolean
}

const ShuffledTeam: React.FC<Props> = ({ name, members, fetching, className }) => {
  return (
    <Container className={className}>
      <TeamName>{name}</TeamName>
        <TeamMembers>
        {members && members.map((member) => (
          <TeamMember
            key={member.id}
            member={member}
          />
        ))}
        </TeamMembers>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-rows: auto 1fr;
  align-items: start;
  padding: 16px;
  border-radius: 8px;
`

const TeamName = styled.div`
  font-size: 20px;
  font-weight: 600;
`

const TeamMembers = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-auto-rows: max-content;
  justify-items: start;
  align-items: start;
`

export default ShuffledTeam