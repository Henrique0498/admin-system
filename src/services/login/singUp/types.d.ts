export interface CreteUserProps {
  url: string
  name: string
  username: string
  password: string
  passwordConfirm: string
  email: string
  birthDate: string
  gender: string
}

export interface ResponseCreateUserProps {
  type: 'error' | 'success'
  message: string
}
