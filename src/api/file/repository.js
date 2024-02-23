import pool from '../../data/index.js';

export default {
    async create(name, path, size) {
        const query = `INSERT INTO files (original_name, file_path, file_size) VALUES (?, ?, ?)`;
        return await pool.execute(query, [name, path, size]);
    },

    async show(id) {
        const query = `SELECT * FROM files WHERE id = ?`;
        let result = pool.execute(query, [id]);
        return (result.length > 0) ? result[0] : null;
    }
}