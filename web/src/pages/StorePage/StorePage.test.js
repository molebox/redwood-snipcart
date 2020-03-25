import { render, cleanup } from '@testing-library/react'

import StorePage from './StorePage'

describe('StorePage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<StorePage />)
    }).not.toThrow()
  })
})
