import React from 'react'
import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { Member } from '../models/Member'

import TeamMember from './TeamMember'

interface Props {
  name: string
  members: Member[]
  className?: string
}

const ShuffledTeam: React.FC<Props> = ({ name, members, className }) => {
  return (
    <Container className={className}>
      <TeamName>{name}</TeamName>
      <TransitionGroup>
          <TeamMembers>
          {members.map((member) => (
            <CSSTransition key={member.id} in={false} timeout={3000}>
              <TeamMember name={member.name}/>
            </CSSTransition>
          ))}
        </TeamMembers>
        </TransitionGroup>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-gap: 16px;
  background-color: #efefef;
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
  width: 30vw;
  height: 30vh;
`

export default ShuffledTeam