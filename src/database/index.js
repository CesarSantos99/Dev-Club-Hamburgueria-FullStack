import Sequelize from 'sequelize'
import Product from '../app/model/Product'

import User from '../app/model/User'

import configDatabase from '../config/database'

const models = [User, Product]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(configDatabase)
    models.map((model) => model.init(this.connection))
  }
}

export default new Database()
