const ACCESS_TOKEN = 'ACCESS_TOKEN'
const ACCESS_TOKEN_ADMIN = 'ACCESS_TOKEN_ADMIN'

export const setAccessToken = (token) => localStorage.setItem(ACCESS_TOKEN, token);

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN)


// admin
export const setAccessTokenAdmin = (token) => localStorage.setItem(ACCESS_TOKEN_ADMIN, token);

export const getAccessTokenAdmin = () => localStorage.getItem(ACCESS_TOKEN_ADMIN);

export const removeAccessTokenAdmin = () => localStorage.removeItem(ACCESS_TOKEN_ADMIN)