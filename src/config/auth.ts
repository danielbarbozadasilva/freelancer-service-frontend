const TOKEN_KEY: string | undefined = process.env.REACT_APP_TOKEN_KEY

interface UserData {
  token: string
  data: any
}

const getToken = (): string | false => {
  const result: UserData | null = JSON.parse(localStorage.getItem(TOKEN_KEY || '') || 'null');
  if (result && result.token) {
    return result.token;
  }
  return false;
};

const getUser = (): any | false => {
  const result: UserData | null = JSON.parse(localStorage.getItem(TOKEN_KEY || '') || 'null');
  if (result && result.data) {
    return result.data;
  }
  return false;
};

const isAuthenticated = (): boolean => {
  return getToken() !== false;
};

const removeToken = (): void => localStorage.removeItem(TOKEN_KEY || '');

const saveAuth = (data: UserData): void =>
  localStorage.setItem(TOKEN_KEY || '', JSON.stringify(data));

export { saveAuth, getToken, getUser, isAuthenticated, removeToken };