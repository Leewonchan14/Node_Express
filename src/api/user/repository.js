import pool from '../../data/index.js';

export default {
    async register(email, password, name) {
        const query = `INSERT INTO flutter.user (email, password, name) VALUES (?, ?, ?)`;
        return await pool.execute(query, [email, password, name]);
    },

    async login(email, password) {
        const query = `SELECT * FROM flutter.user WHERE email = ? and password = ?`;
        let result = await pool.execute(query, [email, password]);
        return (result.length > 0) ? result[0] : null;
    },
    async find(email) {
        const query = `SELECT * FROM flutter.user WHERE email = ?`;
        let result = await pool.execute(query, [email]);
        return (result.length > 0) ? result[0] : null;
    }
}