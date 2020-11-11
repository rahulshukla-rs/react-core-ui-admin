const setJwtToken = (token) => {
    try {
        localStorage.setItem('JWT_TOKEN', token);
        return true;
    }
    catch (e) {
        console.log(e)
    }
}

const getJwtToken = () => {
    try {
        let token = localStorage.getItem('JWT_TOKEN') || null;
        return token;
    }
    catch (e) {
        console.log(e)
    }
}

const removeJwtToken = () => {
    try {
        localStorage.removeItem('JWT_TOKEN');
        return true;
    }
    catch (e) {
        console.log(e)
    }
}

export { setJwtToken, getJwtToken, removeJwtToken }