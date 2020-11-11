const BASE_URL = process.env.REACT_APP_PROD_API_URL || "http://localhost:5000/";
const JWT_KEY = process.env.JWT_KEY || "testApp";

console.log(process.env.REACT_APP_PROD_API_URL)

export {BASE_URL, JWT_KEY}