import axios  from "axios";
import { authHeader } from "../utils/apiHandlers";


const API = 'http://localhost:3000/api/v1'

const registerRequest = user => axios.post(`${API}/users/create`, user, {
    headers: authHeader()
    })

export default registerRequest
