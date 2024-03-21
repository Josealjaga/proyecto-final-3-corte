import connection from "../../../../config/connection.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const getAllUsers = (req, res) => {
  const sql = "SELECT * FROM users";
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
  const sql = `SELECT * FROM users WHERE id = ${id}`;
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error);
    } else {
      res.json(rows);
    }
  });
};

export const createUsers = async (req, res) => {
  const {email, password, fullname, rol } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const sql = `INSERT INTO users (email, password, fullname, rol) VALUES ('${email}', '${passwordHash}', '${fullname}', '${rol}')`;
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error);
    } else {
      res.json(rows);
    }
  });
};

export const updateUsers = (req, res) => {
  const { id, email, password, fullname, rol } = req.body;
  const sql = `UPDATE users SET email = '${email}', password = '${password}', fullname = '${fullname}', rol = '${rol}' WHERE id = '${id}'`;
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error);
    } else {
      res.json(rows);
    }
  });
};

export const deleteUsers = (req, res) => {
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

// export const authUsers  = (req, res) => {
  
//   const{ email, password } = req.body;
//   const inPassword = password
//   const sql = "SELECT * FROM users WHERE email = '${email}'";


//  export const authUsers = async (req, res) => {
//   const { email, password } = req.body;
//    const credentials = {
//      email: email,
//    };
//    const sql = `SELECT * FROM users WHERE email = '${email}'`;
//    connection.query(sql, async (error, rows) => {
//      if (error) {
//        res.jason(error);
//      } else {
//        if (rows.length) {
//          const { email, password } = rows[0];
//          const passwordMatch = await bcrypt.compare(inPassword, password);
//          const tokens = jwt.sign( credentials, 'ztechnology')
//          if (passwordMatch) {
//            res.json({
//              name: rows[0].full_name,
//              email: rows[0].email,
//              token: tokens
//            });
//          } else {
//            res.json("ERROR_PASSWORD");
//          }
//          res.json(rows);
//        } else {
//          res.json("USER_DOES_NOT_EXIST");
//        }
//      }
//    });
//  };
