import React from 'react'
import styled from 'styled-components'
import Button from './Button'

export default function Navigation({ onNavigate, activeIndex }) {
  return (
    <Nav>
      <Button isActive={activeIndex === 0} onClick={() => onNavigate(0)}>
        Play
      </Button>
      <Button isActive={activeIndex === 1} onClick={() => onNavigate(1)}>
        History
      </Button>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
`
