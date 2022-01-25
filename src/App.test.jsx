import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import App from './App'

test('Should render the header', async () => {
  render(<App />)

  const image = screen.getByAltText(/alchemy/i)
  const bannerColor = screen.getByRole('banner', {})
  const profileName = await screen.findByText(/Vonta/i)

  expect(image).toBeInTheDocument()
  expect(profileName).toBeInTheDocument()
  expect(bannerColor).toHaveStyle({ background: 'var(--grey)' })
})
