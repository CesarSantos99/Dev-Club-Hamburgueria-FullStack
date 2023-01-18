import { Router } from 'express'
import ProdutController from './app/controllers/ProdutController'
import SessionController from './app/controllers/SessionController'

import UserController from './app/controllers/UserController'

const routes = new Router()

routes.post('/users', UserController.store)

routes.post('/sessions', SessionController.store)

routes.post('/products', ProdutController.store)

export default routes
