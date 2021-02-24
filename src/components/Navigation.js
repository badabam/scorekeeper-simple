import React from 'react'
import styled from 'styled-components'
import Button from './Button'

export default function Navigation({ onNavigate, currentPage }) {
  return (
    <Nav>
      <Button
        isActive={currentPage === 'play'}
        onClick={() => onNavigate('play')}
      >
        Play
      </Button>
      <Button
        isActive={currentPage === 'history'}
        onClick={() => onNavigate('history')}
      >
        History
      </Button>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
`
