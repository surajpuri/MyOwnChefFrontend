export const getJwt = () => {
    return JSON.parse(localStorage.getItem('LoginToken'));
};