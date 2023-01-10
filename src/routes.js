import { Router } from 'express'
import { v4 } from 'uuid'
import User from './app/model/User'

const routes = new Router()

routes.get('/', async (request, response) => {
  const user = await User.create({
    id: v4(),
    name: 'Cesar',
    email: 'cesarsantos@email.com',
    password_hash: '56789gb',
  })
  return response.json(user)
})

export default routes
