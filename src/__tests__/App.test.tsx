import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App smoke', () => {
  it('renders main sections', () => {
    render(<App />)

    // Check for key section headings/titles
    expect(screen.getByText(/About Me/i)).toBeInTheDocument()
    expect(screen.getByText(/My Skills/i)).toBeInTheDocument()
    expect(screen.getByText(/My Projects/i)).toBeInTheDocument()
    expect(screen.getByText(/Get in Touch/i)).toBeInTheDocument()
  })
})
