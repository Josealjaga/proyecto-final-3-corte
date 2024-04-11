import axios  from "axios";
import { authHeader } from "../utils/apiHandlers";

const API = 'http://localhost:3000/api/v1'

const productsRegisterRequest = products => axios.post(`${API}/products/create`, products, {
    headers: authHeader()

    })

export default productsRegisterRequest