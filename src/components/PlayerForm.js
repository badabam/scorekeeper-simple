import styled from 'styled-components/macro'

export default function PlayerForm({ onAddPlayer }) {
  return (
    <FormPlayer onSubmit={handleSubmit}>
      <label>
        Add player:
        <br />
        <input name="player" placeholder="Player name" />
      </label>
    </FormPlayer>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.player
    const name = input.value
    onAddPlayer(name)
    form.reset()
    input.focus()
  }
}

const FormPlayer = styled.form`
  & input {
    border: 2px solid #bbb;
    width: 100%;
  }
`
