var jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'your-secret-key'

export function signJwt(payload: object, expiresIn = '1h') {
  return jwt.sign(payload, SECRET, { expiresIn })
}

export function verifyJwt(token: string) {
  try {
    return jwt.verify(token, SECRET)
  } catch (err) {
    return null
  }
}

