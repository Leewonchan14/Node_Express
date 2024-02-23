import jwt from 'jsonwebtoken';

export default {
    async jwtSign(payload) {
        return new Promise((resolve, reject) => {
            jwt.sign(
                payload,
                "my-secret-key",
                {expiresIn: "1m", algorithm: "HS256"},
                (err, token) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(token);
                });
        });
    }
}