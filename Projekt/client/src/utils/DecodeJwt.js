import jwt_decode from 'jwt-decode';


const DecodeJwt = () => {
    let token = localStorage.getItem("token");
    return jwt_decode(token)
}

export default DecodeJwt