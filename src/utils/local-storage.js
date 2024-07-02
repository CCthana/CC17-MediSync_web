const ACCESS_TOKEN = "ACCESS_TOKEN";
const ACCESS_TOKEN_ADMIN = 'ACCESS_TOKEN_ADMIN'
const CONTACT_PAGE = 'CONTACT_PAGE'

export const setAccessToken = (token) => {
  console.log(token);
  localStorage.setItem(ACCESS_TOKEN, token);
};

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN)


// admin
export const setAccessTokenAdmin = (token) => localStorage.setItem(ACCESS_TOKEN_ADMIN, token);

export const getAccessTokenAdmin = () => localStorage.getItem(ACCESS_TOKEN_ADMIN);

export const removeAccessTokenAdmin = () => localStorage.removeItem(ACCESS_TOKEN_ADMIN)

// contact page
export const setContact = (id) => localStorage.setItem(CONTACT_PAGE, id);

export const getContact = () => localStorage.getItem(CONTACT_PAGE);

// export const removeContact = () => localStorage.removeItem(CONTACT_PAGE)
