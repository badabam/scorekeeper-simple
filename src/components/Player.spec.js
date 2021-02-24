import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Player from './Player'

describe('Player', () => {
  it('has a name, two buttons and a score', () => {
    render(<Player name="John" score={22} />)
    expect(screen.getByText('John')).toBeInTheDocument()
    expect(screen.getAllByRole('button', /[+-]/)).toHaveLength(2)
    expect(screen.getByText('22')).toBeInTheDocument()
  })

  it('supports callbacks for + and - buttons', () => {
    const onPlusCallback = jest.fn()
    const onMinusCallback = jest.fn()
    render(<Player onMinus={onMinusCallback} onPlus={onPlusCallback} />)
    userEvent.click(screen.getByRole('button', { name: '+' }))
    userEvent.click(screen.getByRole('button', { name: '+' }))
    userEvent.click(screen.getByRole('button', { name: '-' }))
    expect(onPlusCallback).toHaveBeenCalledTimes(2)
    expect(onMinusCallback).toHaveBeenCalledTimes(1)
  })

  it('changes the color based on score', () => {
    const { rerender } = render(<Player name="Foo" score={0} />)
    expect(screen.getByText('0')).toMatchSnapshot()
    rerender(<Player score={10} />)
    expect(screen.getByText('10')).toMatchSnapshot()
    rerender(<Player score={-10} />)
    expect(screen.getByText('-10')).toMatchSnapshot()
  })
})
