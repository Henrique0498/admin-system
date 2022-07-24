import { api } from 'services/config'
import {
  AuthenticationProps,
  ResponseAuthenticationSuccessProps
} from './types'

export async function authentication({ url, ...props }: AuthenticationProps) {
  return await api.post<ResponseAuthenticationSuccessProps>(url, props)
}
