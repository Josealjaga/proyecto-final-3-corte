const saveSessionStorageToken = (token) => {
    sessionStorage.setItem('accessToken', token);
};

const getToken = () => {
    return sessionStorage.getItem('accessToken');
}

export { saveSessionStorageToken, getToken };