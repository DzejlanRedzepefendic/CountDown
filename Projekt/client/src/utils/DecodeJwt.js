import jwt_decode from 'jwt-decode';


const DecodeJwtFromlocalStorage = (token) => {
    const {id, name } =jwt_decode(token)
    return {id, name}
}

export default DecodeJwtFromlocalStorage