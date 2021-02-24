import { useState } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'
import GameForm from './GameForm'
import Header from './Header'
import HistoryEntry from './HistoryEntry'
import Navigation from './Navigation'
import Player from './Player'
import PlayerForm from './PlayerForm'

export default function App() {
  const [players, setPlayers] = useState([])
  return (
    <AppLayout>
      <PlayerForm onAddPlayer={handleAddPlayer} />
      {players.map(({ name, score }, index) => (
        <Player
          key={name}
          name={name}
          score={score}
          onPlus={() => handlePlus(index)}
          onMinus={() => handleMinus(index)}
        />
        // React.createElement(Player, {name, score, onPlus: () => handlePlus(index)})
      ))}
      <ButtonGrid>
        <Button onClick={resetScores}>Reset scores</Button>
        <DangerButton onClick={resetAll}>Reset all</DangerButton>
      </ButtonGrid>

      <GameForm onCreateGame={data => console.log('onCreateGame', data)} />
      <Navigation
        activeIndex={0}
        onNavigate={index => console.log('onNavigate', index)}
      />
      <Header></Header>
      <HistoryEntry
        nameOfGame="Carcassonne"
        players={[
          { name: 'John Doe', score: 10 },
          { name: 'Jane Doe', score: 20 },
        ]}
      />
    </AppLayout>
  )

  function handleAddPlayer(name) {
    setPlayers(oldPlayers => [...oldPlayers, { name, score: 0 }])
  }

  function resetAll() {
    setPlayers([])
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function handlePlus(index) {
    const currentPlayer = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score + 1 },
      ...players.slice(index + 1),
    ])
  }

  function handleMinus(index) {
    const currentPlayer = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score - 1 },
      ...players.slice(index + 1),
    ])
  }
}

const AppLayout = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
`
const DangerButton = styled(Button)`
  background-color: mistyrose;
  border: 1px solid red;
`
const ButtonGrid = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr 1fr;
`
