import axios, { AxiosError } from 'axios'
import { api } from 'services/config'
import { CreteUserProps, ResponseCreateUserProps } from './types'

export async function createUser({ url, ...props }: CreteUserProps) {
  return await api
    .post(url, props)
    .then(() => {
      const response: ResponseCreateUserProps = {
        type: 'success',
        message: 'Usuário criado com sucesso.'
      }

      return response
    })
    .catch((err: Error | AxiosError<{ error: string }>) => {
      const message =
        'Erro ao tentar criar o usuário, por favor, verifique os dados informados.'

      if (axios.isAxiosError(err)) {
        const response: ResponseCreateUserProps = {
          type: 'error',
          message: err.response?.data?.error ?? message
        }

        return response
      } else {
        const response: ResponseCreateUserProps = {
          type: 'error',
          message
        }

        return response
      }
    })
}
