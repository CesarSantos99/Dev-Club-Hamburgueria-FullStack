import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import ProdutController from './app/controllers/ProdutController'
import SessionController from './app/controllers/SessionController'
import CategoryController from './app/controllers/CategoryController'
import UserController from './app/controllers/UserController'
import OrderController from './app/controllers/OrderController '

import authMiddleware from './app/middlewares/auth'
const upload = multer(multerConfig)

const routes = new Router()

routes.post('/users', UserController.store)

routes.post('/sessions', SessionController.store)

routes.use(authMiddleware) // será chamdado todas as rotas abaixo

routes.post('/products', upload.single('file'), ProdutController.store)
routes.get('/products', ProdutController.index)
routes.put('/products/:id', upload.single('file'), ProdutController.update)

routes.post('/categories', upload.single('file'), CategoryController.store)
routes.get('/categories', CategoryController.index)
routes.put('/categories/:id', upload.single('file'), CategoryController.update)

routes.post('/orders', OrderController.store)
routes.put('/orders/:id', OrderController.update)
routes.get('/orders', OrderController.index)

export default routes
