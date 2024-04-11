import { getToken } from "./sessionStorageManager"

export const authHeader = () => {
	const token = getToken()

	return {
		'Accept': 'application/json',
		'Content-type': 'application/json',
		'Authorization': `Bearer ${token}`
	}
}