import * as Yup from 'yup'
import Category from '../model/Category'

class CategoryController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ erro: err.errors })
    }
    const { name } = request.body

    const category = await Category.create({ name })

    return response.json(category)
  }

  async index(request, response) {
    const category = await Category.findAll()
    return response.json(category)
  }
}

export default new CategoryController()
