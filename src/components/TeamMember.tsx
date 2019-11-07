import React from 'react'
import styled from 'styled-components'

import { Member } from '../api/models/Member'

interface Props {
  member: Member
  onRemove?: (arg0: number) => any
}

const TeamMember: React.FC<Props> = ({ member, onRemove }) => {
  return (
    <Container onClick={() => onRemove ? onRemove(member.id) : {}} removable={!!onRemove}>
      <Name>{member.name}</Name>
    </Container>
  )
}

interface ContainerProps {
  removable: boolean
} 

const Container = styled.div<ContainerProps>`
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #878887;
  user-select: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
  ${({ removable }) => removable && 'cursor: pointer;'}
`

const Name = styled.div`

`

export default TeamMember