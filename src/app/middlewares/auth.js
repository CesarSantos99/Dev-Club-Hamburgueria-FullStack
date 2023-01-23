import jwt from 'jsonwebtoken'

export default (request, response, next) => {
  const authToker = request.headers.authorization

  if (!authToker) {
    return response.status(401).json({ error: 'Token not provided' })
  }

  const token = authToker.split(' ')[1]

  console.log(token)

  return next()
}
