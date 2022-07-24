export interface AuthenticationProps {
  url: string
  username: string
  password: string
}

export interface ResponseAuthenticationErrorProps {
  error: string
}

export interface ResponseAuthenticationSuccessProps {
  username: string
  name: string
  token: string
  photo: string
}
