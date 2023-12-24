const TOKEN_KEY = process.env.REACT_APP_TOKEN_KEY

const getToken = () => {
  const result = JSON.parse(localStorage.getItem(TOKEN_KEY || '') || 'null')
  if (result && result.token) {
    return result.token
  }
  return false
}

const getUser = () => {
  const result = JSON.parse(localStorage.getItem(TOKEN_KEY || '') || 'null')
  if (result && result.data) {
    return result.data
  }
  return false
}

const isAuthenticated = () => {
  return getToken() !== false
}

const removeToken = () => localStorage.removeItem(TOKEN_KEY || '')

const saveAuth = (data: Object) =>
  localStorage.setItem(TOKEN_KEY || '', JSON.stringify(data))

export { saveAuth, getToken, getUser, isAuthenticated, removeToken }
