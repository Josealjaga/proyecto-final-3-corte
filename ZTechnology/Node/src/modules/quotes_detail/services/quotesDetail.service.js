import connection from "../../../../config/connection.js"

export const getAllQuotesDetail = (req, res) => {
  const sql = "SELECT * FROM quotes_detail"
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
  const sql = `SELECT * FROM quotes_detail WHERE id = ${id}`
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error)
    } else {
      res.json(rows)
    }
  })
}

export const createQuotesDetail = async (req, res) => {
  const { quotes_id, product_id, quantity } = req.body
  const sql = `INSERT INTO quotes_detail (quotes_id, products_id, quantity) VALUES ('${quotes_id}', '${product_id}', '${quantity}')`
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error)
    } else {
      res.json(rows)
    }
  })
}

export const updateQuotesDetail = (req, res) => {
  const { id, quotes_id, product_id, quantity } = req.body
  const sql = `UPDATE quotes_detail SET quotes_id = '${quotes_id}', products_id = '${product_id}', quantity = '${quantity}' WHERE id = '${id}'`
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error)
    } else {
      res.json("UPDATE_SUCCESSFULLY")
    }
  })
}

export const deleteQuotesDetail = (req, res) => {
  const { id } = req.body
  const sql = `DELETE FROM quotes_detail WHERE id = '${id}'`
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error)
    } else {
      res.json("USERS_DELETED_SUCCESSFULLY")
    }
  })
}
