import jwt from "jsonwebtoken"

export const validateAdmin = (req, res, next) => {
  const token = req.headers.token
  let payload
  try {
    payload = jwt.verify(token, process.env.JWT_SECRET)
  } catch (error) {
    res.send(401).json({ error: "Token invalid" })
  }
  if (!payload) res.status(403).json({ error: "Token invalid" })
  if (payload.role !== "Administrador")
    res.status(403).json({ error: "You are not admin" })
  next()
}

export const validateManager = (req, res, next) => {
  const token = req.headers.token
  let payload
  try {
    payload = jwt.verify(token, process.env.JWT_SECRET)
  } catch (error) {
    res.send(401).json({ error: "Token invalid" })
  }
  if (!payload) res.status(403).json({ error: "Token invalid" })
  if (payload.role !== "Gestor" || payload.role !== "Administrador")
    res.status(403).json({ error: "Access denied" })
  next()
}
