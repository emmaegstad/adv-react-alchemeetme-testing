import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import App from './App'

test('Should render the header', async () => {
  render(<App />)

  const image = screen.getByAltText(/alchemy/i)
  expect(image).toBeInTheDocument()

  const profileName = await screen.findByText(/Vonta/i)
  expect(profileName).toBeInTheDocument()
})
