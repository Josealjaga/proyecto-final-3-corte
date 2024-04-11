import axios  from "axios";

const API = 'http://localhost:3000/api/v1'
const  loginRequest = credentials => axios.post(`${API}/userslog/auth`, credentials);

export default loginRequest