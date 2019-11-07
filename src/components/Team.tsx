import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

// API
import { Members } from '../api/endpoint'
import { Member } from '../api/models/Member'

// Component
import TeamMember from './TeamMember'

// Res
import AddIcon from '../res/icon/add.svg'

interface Props {
  members?: Member[]
  onAddMember?: () => any
  onRemoveMember?: () => any
}

const Team: React.FC<Props> = ({ members, onAddMember, onRemoveMember }) => {
  const [name, setName] = useState('')

  const handleInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event
    setName(value)
  }, [])
 
  const addMember = useCallback(async () => {
    await Members.post(name)
    setName('')
    onAddMember && onAddMember()
  }, [name, onAddMember])

  const removeMember = useCallback(async (id: number) => {
    await Members.delete(id)
    onRemoveMember && onRemoveMember()
  }, [])

  return (
    <Container>
      <TopContainer>
        <TeamName>Members</TeamName>
      </TopContainer>
      <MembersContainer>
        {members && members.map((member) => (
          <TeamMember
            key={member.id}
            member={member}
            onRemove={removeMember}
          />)
        )}
      </MembersContainer>
      <InputContainer>
        <Input type="text" onChange={handleInput} value={name} />
        <AddButton onClick={addMember} />
      </InputContainer>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-rows: auto 1fr auto;
  background: rgba(0, 0, 0, 0.08);
  color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 16px;
`

const TopContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`

const TeamName = styled.div`
  font-size: 20px;
  font-weight: 600;
`

const MembersContainer = styled.div`
  display: grid;
  grid-gap: 8px;
  justify-items: start;
`

const InputContainer = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: min-content min-content min-content;
  justify-self: start;
  background: lightgrey;
  padding: 4px 8px;
  border-radius: 8px;
`

const Input = styled.input`
  padding: 4px 8px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: #333333;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`

const Button = styled.div`
  display: grid;
  box-sizing: border-box;
  justify-items: center;
  align-items: center;
  text-align: center;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
  user-select: none;
  cursor: pointer;
`

const AddButton = styled.div`
  width: 24px;
  height: 24px;
  align-self: center;
  background-image: url(${AddIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

export default Team