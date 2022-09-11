export interface CreteUserProps {
  url: string
  username: string
  password: string
  email: string
}

export interface ResponseCreateUserProps {
  type: 'error' | 'success'
  message: string
}
