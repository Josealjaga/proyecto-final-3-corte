import axios  from "axios";
import { authHeader } from "../utils/apiHandlers";

const API = 'http://localhost:3000/api/v1'

const clientRegisterRequest = clients => axios.post(`${API}/clients/create`, clients, {
    headers: authHeader()

    })

export default clientRegisterRequest