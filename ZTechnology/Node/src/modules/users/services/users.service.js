import connection from "../../../../config/connection.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const getAllUsers = (req, res) => {
  const sql = "SELECT * FROM users"
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error)
    } else {
      res.json(rows)
    }
  })
}

export const getById = (req, res) => {
  const { id } = req.params
  const sql = `SELECT * FROM users WHERE id = ${id}`
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error)
    } else {
      res.json(rows)
    }
  })
}

export const createUsers = async (req, res) => {
  const { email, password, fullname, rol } = req.body
  const passwordHash = await bcrypt.hash(password, 10)
  const payload = {
    email: email,
    fullname: fullname,
    role: rol
  }

  const sql = `INSERT INTO users (email, password, fullname, rol) VALUES ('${email}', '${passwordHash}', '${fullname}', '${rol}')`
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error)
    }
  })

  const token = jwt.sign(payload, process.env.JWT_SECRET)
  res.status(200).json(token)
}

export const updateUsers = (req, res) => {
  const { id, email, password, fullname, rol } = req.body
  const sql = `UPDATE users SET email = '${email}', password = '${password}', fullname = '${fullname}', rol = '${rol}' WHERE id = '${id}'`
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error)
    } else {
      res.json(rows)
    }
  })
}

export const deleteUsers = (req, res) => {
  const { id } = req.params
  const sql = `DELETE FROM users WHERE id = '${id}'`
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error)
    } else {
      res.json("USERS_DELETED_SUCCESSFULLY")
    }
  })
}
