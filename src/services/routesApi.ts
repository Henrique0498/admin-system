export function routerAuthentication(username: string, password: string) {
  return {
    url: 'authentication',
    body: {
      username,
      password
    }
  }
}
