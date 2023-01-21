import * as Yup from 'yup'
import Product from '../model/Product'

class ProductController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category: Yup.string().required(),
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ erro: err.errors })
    }
    const { filename: path } = request.file
    const { name, price, category } = request.body

    const product = await Product.create({
      name,
      price,
      category,
      path,
    })

    return response.json(product)
  }

  async index(request, response) {
    const products = await Product.findAll()

    return response.json(products)
  }
}

export default new ProductController()
