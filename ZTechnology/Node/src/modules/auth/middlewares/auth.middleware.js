import jwt from "jsonwebtoken"

const parseBearer = (bearer) => {
  const [_, token] = bearer.trim().split(" ")
  return token
}

export const validateAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization
  const token = parseBearer(authHeader)
  if (!token) {
    return res.status(401).json({
      status: 401,
      message: "No token provided."
    })
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET)
    next()
  } catch (error) {
    res.status(401).json({ error: "Token invalid" })
  }
  // if (!payload) res.status(403).json({ error: "Token invalid" })
  // if (payload.role !== "Administrador")
  //   res.status(403).json("You are not admin")
}
