import { render, screen } from '@testing-library/react'
import HistoryEntry from './HistoryEntry'

describe('HistoryEntry', () => {
  it('renders game data from props', () => {
    const { container } = render(
      <HistoryEntry
        nameOfGame="Foo"
        players={[
          { name: 'John', score: 10 },
          { name: 'Jane', score: 20 },
        ]}
      />
    )
    expect(screen.getByText('Foo')).toBeInTheDocument()
    expect(screen.getByText('John')).toBeInTheDocument()
    expect(screen.getByText('Jane')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
