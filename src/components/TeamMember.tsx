import React from 'react'
import styled from 'styled-components'

interface Props {
  name: string
}

const TeamMember: React.FC<Props> = ({ name }) => {
  return (
    <Container>
      <Name>{name}</Name>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  background: linear-gradient(45deg,rgb(137, 179, 255) 0%,rgb(38,168,228) 100%);
  user-select: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
`

const Name = styled.div`

`

export default TeamMember