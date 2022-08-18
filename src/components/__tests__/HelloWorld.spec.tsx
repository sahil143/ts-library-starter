import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { HelloWorld } from '../HelloWorld'

describe('HelloWorld', () => {
  it('should pass', () => {
    expect(2 + 2).toEqual(4)
  })

  it('should render', () => {
    render(<HelloWorld />)
    screen.getByText('Hello World')
  })
})
