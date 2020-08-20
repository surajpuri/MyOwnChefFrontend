import { getJwt } from './getJwt';

export const getRole = () => {
    const JWT = getJwt();
    // authenticate user role
    if (JWT === null || JWT === undefined || !JWT.startsWith('Bearer')) {
        return null;
    }
    const token = JWT.split(" ")[1];
    const role = JSON.parse(window.atob(token.split(".")[1])).role;
    return role;
};


export const authenticateSession = () => {
    const JWT = getJwt();
    if (JWT === null || JWT === undefined || !JWT.startsWith('Bearer')) {
        return true;
    }
    const token = JWT.split(" ")[1];
    const expirationTime = JSON.parse(window.atob(token.split(".")[1])).exp;
    var dateNow = Date.now() || new Date().getTime();
    dateNow = dateNow / 1000; //convert timestamp to seconds
    if (expirationTime - dateNow < 1) {
        return true;
    }
    return false;
}