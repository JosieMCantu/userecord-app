/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, getByText } from '@testing-library/react';
import App from '../app/App';

describe('useRecord custom hook', () => {
  it('changes colors depending on its place in the array', () => {
      render(<App />)

      screen.getByText('undo')
      screen.getByText('redo')

      const button = screen.findByRole('button', {name: 'button'})
  })
})
