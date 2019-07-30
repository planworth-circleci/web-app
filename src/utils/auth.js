import storage from '../utils/storage'

// TODO this is just a stub, replace with real session service
const TOKEN_KEY = 'APP::SESSION'
// Dummy JWT Token generated with payload of {userId: 123}
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjMiLCJpYXQiOjE1MTYyMzkwMjJ9.npFa56ZVSZOiJUV_yygN9wB1LjtCDFRW9-Q6TikGsgk'

export function login({ email, password }) {
  storage.setItem(TOKEN_KEY, { jwt: TOKEN })
}

export function signup({ email, password }) {
  storage.setItem(TOKEN_KEY, { jwt: TOKEN })
  return { email }
}

export function forgotPassword({ username }) {}

export function getToken() {
  const session = storage.getItem(TOKEN_KEY)
  if (!session) {
    throw new Error('no session available')
  }
  return session
}

export function logout() {
  storage.removeItem(TOKEN_KEY)
}

export default { getToken, logout, login, signup }
