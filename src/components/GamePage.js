import Button from './Button'
import Header from './Header'
import Player from './Player'

export default function GamePage({
  nameOfGame,
  players,
  onMinus,
  onPlus,
  onReset,
  onEnd,
}) {
  return (
    <div>
      <Header>{nameOfGame}</Header>
      {players.map(({ name, score }, index) => (
        <Player
          key={name}
          name={name}
          score={score}
          onPlus={() => onPlus(index)}
          onMinus={() => onMinus(index)}
        />
      ))}
      <Button onClick={onReset}>Reset scores</Button>
      <Button onClick={onEnd}>End game</Button>
    </div>
  )
}
