import React from 'react'
import styled from 'styled-components'

export default function Input({ labelText, placeholder, name }) {
  return (
    <Label>
      {labelText}
      <InputStyled name={name} placeholder={placeholder} type="text" />
    </Label>
  )
}

const Label = styled.label`
  display: grid;
  gap: 4px;
`

const InputStyled = styled.input`
  border: 2px solid #bbb;
`
