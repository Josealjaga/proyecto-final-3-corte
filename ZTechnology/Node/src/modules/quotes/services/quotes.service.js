import connection from "../../../../config/connection.js"

export const getAllQuotes = (req, res) => {
  const sql =
    "SELECT q.id, q.client_id, c.fullname, q.date, q.discount, q.total FROM quote as q INNER JOIN clients as c on c.id = q.client_id"
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
  const sql = `SELECT * FROM quote WHERE id = ${id}`
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error)
    } else {
      res.json(rows)
    }
  })
}

export const createQuotes = async (req, res) => {
  const { client_id, date, discount, total } = req.body
  const sql = `INSERT INTO quote (client_id, date, discount) VALUES ('${client_id}', '${date}', '${discount}')`
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error)
    } else {
      res.json(rows)
    }
  })
}

export const updateQuotes = (req, res) => {
  const { id, client_id, date, discount, total } = req.body
  const sql = `UPDATE quote SET client_id = '${client_id}', date = '${date}', discount = '${discount}' WHERE id = '${id}'`
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error)
    } else {
      res.json("UPDATE_SUCCESSFULLY")
    }
  })
}

export const deleteQuotes = (req, res) => {
  const { id } = req.params
  const sql = `DELETE FROM quote WHERE id = '${id}'`
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error)
    } else {
      res.json("USERS_DELETED_SUCCESSFULLY")
    }
  })
}
