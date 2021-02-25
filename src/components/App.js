import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import CreatePage from './CreatePage'
import GamePage from './GamePage'
import HistoryPage from './HistoryPage'
import { Route, Switch, useHistory } from 'react-router-dom'
import Navigation from './Navigation'
import HistoryDetailPage from './HistoryDetailPage'
import { loadFromLocal, saveToLocal } from '../lib/localStorage'

export default function App() {
  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')
  const [history, setHistory] = useState(loadFromLocal('history') ?? [])
  const { push } = useHistory()

  useEffect(() => {
    saveToLocal('history', history)
  }, [history])

  return (
    <AppLayout>
      <Switch>
        <Route exact path="/">
          <CreatePage onCreateGame={createGame} />
        </Route>
        <Route path="/game">
          <GamePage
            nameOfGame={nameOfGame}
            players={players}
            onMinus={handleMinus}
            onPlus={handlePlus}
            onReset={resetScores}
            onEnd={endGame}
          />
        </Route>
        <Route exact path="/history">
          <HistoryPage history={history} />
        </Route>
        <Route path="/history/:nameOfGame">
          <HistoryDetailPage history={history} />
        </Route>
      </Switch>
      <Route exact path="/">
        <Navigation />
      </Route>
      <Route path="/history">
        <Navigation />
      </Route>
    </AppLayout>
  )

  function createGame({ nameOfGame, playerNames }) {
    setNameOfGame(nameOfGame)
    setPlayers(playerNames.map(name => ({ name, score: 0 })))
    push('/game')
  }

  function endGame() {
    setHistory([{ players, nameOfGame, id: uuidv4() }, ...history])
    setPlayers([])
    setNameOfGame('')
    push('/history')
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
