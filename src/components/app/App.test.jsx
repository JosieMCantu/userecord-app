import React from 'react';
import {screen, getByText} from '@testing-library/react';
import App from '../App';

describe.skip('useRecord custom hook', () => {
  
  it.skip('changes colors depending on its place in the array', async () => {

      render(<App />)

      screen.getByText('previous')
      screen.getByText('next')

      const button = await screen.findByRole('button', {name: 'button'})
  })
})
