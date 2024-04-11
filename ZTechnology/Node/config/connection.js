import mysql from "mysql"

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "ztechnology",
  port: "3307"
})
connection.connect((error) => {
  if (error) {
    console.error(error)
  } else {
    console.log("Database connected successfully!")
  }
})
export default connection
