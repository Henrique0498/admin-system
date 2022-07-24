export function routerAuthentication(username: string, password: string) {
  return {
    url: 'authentication',
    body: {
      username,
      password
    }
  }
}

export const POST_AUTHENTICATION = 'authentication'

export const POST_CREATE_USER = 'user'
