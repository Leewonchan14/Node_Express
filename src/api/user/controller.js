import jwt from '../user/jwt.js';
import repository from './repository.js';
import crypto from "crypto";

export default {
    async register(req, res)  {
        let {email, password, name} = req.body;

        let result = crypto.pbkdf2Sync(password, "my-secret-key", 50, 100, "sha512");

        const isExist = await repository.find(email);

        if (isExist) {
            return res.send({result: "fail", "message": "이미 존재하는 이메일입니다."});
        }

        const {affectedRows} = await repository.register(email, result.toString('base64'), name);

        if (affectedRows > 0) {
             let data = await jwt.jwtSign({id: "test"});
            res.send({access_token: data});
        } else {
            res.send({result: "fail"});
        }
    },
    async login(req, res) {
        let {email, password} = req.body;

        let result = crypto.pbkdf2Sync(password, "my-secret-key", 50, 100, "sha512");

        const item = await repository.login(email, result.toString("base64"));

        if (item == null) {
            res.body = {result: "fail"};
        } else {
            res.body = await jwt.jwtSign({name: item.name});
        }

        const ret = {result : res.body};

        res.send(ret);
    },

    async userinfo(req, res) {
        const id = req.params.id;
        const user = await repository.find(id);
        res.send(user);
    }
}