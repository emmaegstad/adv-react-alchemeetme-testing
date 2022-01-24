import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import Home from './Home'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test.only('Should render the user profile', async () => {
  render(<Home user={user} />)

  const profileName = screen.getByRole('heading', { name: /Vonta/i })
  expect(profileName).toBeInTheDocument()

  const motto = await screen.findByText('Res Non Verba')
  expect(motto).toBeInTheDocument()

  const interestsHeading = screen.getByRole('heading', { name: /Interests/i })
  expect(interestsHeading).toBeInTheDocument()

  const avatar = screen.getByAltText(/avatar/i)
  expect(avatar).toBeInTheDocument()

  const headerImage = screen.getByAltText(/header/i)
  expect(headerImage).toBeInTheDocument()

  const likesList = await screen.findAllByRole('listitem')
  expect(likesList).toHaveLength(6)
})
