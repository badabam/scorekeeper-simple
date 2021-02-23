import styled from 'styled-components/macro'

export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <PlayerData>
      {name}
      <PlayerScore>
        <button onClick={onMinus}>-</button>
        <span>{score}</span>
        <button onClick={onPlus}>+</button>
      </PlayerScore>
    </PlayerData>
  )
}

const PlayerData = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const PlayerScore = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`
