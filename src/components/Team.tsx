import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

import { Member } from '../models/Member'

import TeamMember from './TeamMember'

interface Props {
  members: Member[] | undefined
}

const Team: React.FC<Props> = ({ members }) => {
  const [name, setName] = useState('')

  const handleInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event
    setName(value)
  }, [])
 
  const addMember = useCallback(() => {
    setName('')
  }, [])

  return (
    <Container>
      <TeamName>Members</TeamName>
      <MembersContainer>
        {members && members.map((member) => <TeamMember key={member.id} name={member.name} />)}
      </MembersContainer>
      <InputContainer>
        <Input type="text" onChange={handleInput} value={name} />
        <AddButton onClick={addMember}>Add</AddButton>
        <ShuffleButton>Shuffle!</ShuffleButton>
      </InputContainer>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-rows: auto 1fr auto;
  background: #efefef;
  border-radius: 8px;
  padding: 16px;
`

const TeamName = styled.div`
  font-size: 20px;
  font-weight: 600;
`

const MembersContainer = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-rows: max-content;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
`

const InputContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: min-content min-content min-content;
`

const Input = styled.input`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid;
  border-color: #d0d0d0;
  font-size: 14px;
  font-weight: 600;
  color: #333333;

  &:focus {
    outline: none;
    border-color: orange;
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

const AddButton = styled(Button)`
  background: orangered;
`

const ShuffleButton = styled(Button)`
  background: #23c575;
`

export default Team