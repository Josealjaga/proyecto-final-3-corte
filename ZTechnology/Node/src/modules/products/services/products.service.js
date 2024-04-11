import connection from "../../../../config/connection.js"

export const getAllProducts = (req, res) => {
  const sql = "SELECT * FROM products"
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
  const sql = `SELECT * FROM products WHERE id = ${id}`
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error)
    } else {
      res.json(rows)
    }
  })
}

export const createProducts = async (req, res) => {
  const { name, detail, price } = req.body
  const sql = `INSERT INTO products (name, detail, price ) VALUES ('${name}', '${detail}', '${price}')`
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error)
    } else {
      res.json(rows)
    }
  })
}

export const updateProducts = (req, res) => {
  const { id, name, detail, price } = req.body
  const sql = `UPDATE products SET name = '${name}', detail = '${detail}', price = '${price}' WHERE id = '${id}'`
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error)
    } else {
      res.json("UPDATE_SUCCESSFULLY")
    }
  })
}

export const deleteProducts = (req, res) => {
  const { id } = req.params
  const sql = `DELETE FROM products WHERE id = '${id}'`
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error)
    } else {
      res.json("PRODUCTS_DELETED_SUCCESSFULLY")
    }
  })
}
