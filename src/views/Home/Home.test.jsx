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

test('Should render user with correct properties', async () => {
  render(<Home user={user} />)
  expect(user).toHaveProperty('id')
  expect(user).toHaveProperty('created_at')
  expect(user).toHaveProperty('name')
  expect(user).toHaveProperty('avatar')
  expect(user).toHaveProperty('header')
  expect(user).toHaveProperty('likes')
  expect(user).toHaveProperty('motto')
  expect(user).toHaveProperty('color')
})

test('Should render the user profile', async () => {
  render(<Home user={user} />)

  const { name, motto, likes } = user

  const profileName = await screen.findByRole('heading', { name })
  const mottoText = screen.getByText(motto)
  const interestsHeading = screen.getByRole('heading', { name: /Interests/i })
  const likesList = screen.getByRole('list')

  const avatar = screen.getByAltText(/avatar/i)
  const headerImage = screen.getByAltText(/header/i)

  expect(profileName).toBeInTheDocument()
  expect(mottoText).toBeInTheDocument()
  expect(interestsHeading).toBeInTheDocument()
  expect(likesList.children.length).toEqual(likes.length)
  expect(avatar).toBeInTheDocument()
  expect(headerImage).toBeInTheDocument()
})
