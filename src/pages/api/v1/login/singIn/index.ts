import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const email = 'h.lopes@gmail.com'
  const password = '123123'
  const user = {
    name: 'Henrique',
    user: 'henrique',
    token: 'teste,teste.teste',
    photo: 'teste'
  }

  if (req.method !== 'POST') {
    res.status(400).json({ message: 'Bad request.' })
  } else {
    if (req.body.user !== user.user && req.body.user !== email) {
      res.status(400).json({ message: 'Usuário não existe.' })
    } else if (req.body.password !== password) {
      res.status(400).json({ message: 'A senha esta errada.' })
    } else {
      res.status(200).json(user)
    }
  }
}
