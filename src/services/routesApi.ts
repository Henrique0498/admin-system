export function routerAuthentication(username: string, password: string) {
  return {
    url: 'authentication',
    body: {
      username,
      password
    }
  }
}

export function routerCreateUser(
  username: string,
  password: string,
  email: string,
  date: string,
  gender: string
) {
  return {
    url: 'user',
    body: {
      name: 'henrique',
      username,
      password,
      email,
      date,
      gender
    }
  }
}
