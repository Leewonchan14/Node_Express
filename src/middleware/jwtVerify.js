import jwt from 'jsonwebtoken';

export default async function jwtVerify(req, res, next) {
    let token = req.header('Authorization');
    let decoded = null
    try {
        decoded = await jwt.verify(token, "my-secret-key");
    } catch (err) {
        return res.send(err);
    }
    req.user = decoded;

    next();
}