import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function HistoryEntry({
  nameOfGame,
  players,
  isNameALink = true,
}) {
  return (
    <Wrapper>
      {isNameALink ? (
        <Link to={`/history/${nameOfGame}`}>{nameOfGame}</Link>
      ) : (
        nameOfGame
      )}
      {players.map((player, index) => (
        <Player key={index}>
          <span>{player.name}</span>
          <span>{player.score}</span>
        </Player>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 10px;
`

const Player = styled.div`
  display: flex;
  justify-content: space-between;
`
