import connection from "../../../../config/connection.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const authUsers = async (req, res) => {
  const { email, password: inPassword } = req.body
  const sql = `SELECT * FROM users WHERE email = '${email}'`
  connection.query(sql, async (error, rows) => {
    if (error) {
      res.jason(error)
    } else {
      if (rows.length) {
        const { email, password, fullname, rol } = rows[0]
        const passwordMatch = await bcrypt.compare(inPassword, password)
        const credentials = {
          email: email,
          fullname: fullname,
          role: rol
        }
        const tokens = jwt.sign(credentials, process.env.JWT_SECRET)
        if (passwordMatch) {
          res.json({
            fullname: rows[0].fullname,
            email: rows[0].email,
            role: rol,
            token: tokens
          })
        } else {
          res.json("ERROR_PASSWORD")
        }
        res.json(rows)
      } else {
        res.json("USER_DOES_NOT_EXIST")
      }
    }
  })
}
