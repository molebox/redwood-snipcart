import { render, cleanup } from '@testing-library/react'

import ProductsPage from './ProductsPage'

describe('ProductsPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<ProductsPage />)
    }).not.toThrow()
  })
})
