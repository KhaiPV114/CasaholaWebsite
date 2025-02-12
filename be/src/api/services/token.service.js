import moment from 'moment';
import Token from '../models/token';

const generateToken = (body, expries, types, secret) => {
    const payload = {
        body,
        iat: moment().unix(),
        exp: expries.unix(),
        types,
    };
    return jwt.sign(payload, secret);
}

const saveToken = async (token, userId, expries, types) => {
    const oldToken = await tokenRepository.getByAccountId(userId);
    if (oldToken) {

    }
    const tokenData = {
        token,
        userId,
        expries: expries.toDate(),
        types,
    };

    return await Token.create(tokenData);
}