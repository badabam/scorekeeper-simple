import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import HistoryEntry from './HistoryEntry'
import { HistoryWrapper } from './HistoryPage'

export default function HistoryDetailPage({ history }) {
  const { nameOfGame } = useParams()
  const games = history.filter(entry => entry.nameOfGame === nameOfGame)
  return (
    <div>
      <Header>{nameOfGame}</Header>
      <HistoryWrapper>
        {games.map((game, index) => (
          <HistoryEntry
            nameOfGame={`Game ${index + 1}`}
            players={game.players}
            isNameALink={false}
          />
        ))}
      </HistoryWrapper>
    </div>
  )
}
