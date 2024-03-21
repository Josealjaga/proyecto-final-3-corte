import connection from "../../../../config/connection.js";


export const getAllClients = (req, res) => {
  const sql = "SELECT * FROM clients";
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error);
    } else {
      res.json(rows);
    }
  });
};

export const getById = (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM clients WHERE id = ${id}`;
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error);
    } else {
      res.json(rows);
    }
  });
};

export const createClients = async (req, res) => {
  const {email, fullname, adress } = req.body;
  const sql = `INSERT INTO clients (email, fullname, adress) VALUES ('${email}', '${fullname}', '${adress}')`;
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error);
    } else {
      res.json(rows);
    }
  });
};

export const updateClients = (req, res) => {
  const { id, email, fullname, adress } = req.body;
  const sql = `UPDATE clients SET email = '${email}', fullname = '${fullname}', adress = '${adress}' WHERE id = '${id}'`;
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error);
    } else {
      res.json("UPDATE_SUCCESSFULLY");
    }
  });
};

export const deleteClients = (req, res) => {
  const { id } = req.body;
  const sql = `DELETE FROM users WHERE id = '${id}'`;
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error);
    } else {
      res.json("USERS_DELETED_SUCCESSFULLY");
    }
  });
};