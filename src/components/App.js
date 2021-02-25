import { useState } from 'react'
import styled from 'styled-components/macro'
import Navigation from './Navigation'
import { v4 as uuidv4 } from 'uuid'
import CreatePage from './CreatePage'
import GamePage from './GamePage'
import HistoryPage from './HistoryPage'

export default function App() {
  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')
  const [currentPage, setCurrentPage] = useState('create')
  const [history, setHistory] = useState([])

  return (
    <AppLayout>
      {/* conditional rendering */}
      {currentPage === 'create' && <CreatePage onCreateGame={createGame} />}

      {currentPage === 'game' && (
        <GamePage
          nameOfGame={nameOfGame}
          players={players}
          onMinus={handleMinus}
          onPlus={handlePlus}
          onReset={resetScores}
          onEnd={endGame}
        />
      )}

      {currentPage === 'history' && <HistoryPage history={history} />}

      {(currentPage === 'create' || currentPage === 'history') && (
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      )}
    </AppLayout>
  )

  function createGame({ nameOfGame, playerNames }) {
    // playerNames is ['Jane', 'John']
    setNameOfGame(nameOfGame)
    setPlayers(playerNames.map(name => ({ name, score: 0 })))
    setCurrentPage('game')
  }

  function endGame() {
    setHistory([{ players, nameOfGame, id: uuidv4() }, ...history])
    setPlayers([])
    setNameOfGame('')
    setCurrentPage('create')
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
