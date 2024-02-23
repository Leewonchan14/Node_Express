import mysql from 'mysql2/promise';

async function connection() {
    return mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'flutter',
        waitForConnections: true,
        connectionLimit: 10,
        maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
        queueLimit: 0,
    });
}
export default {
    async execute(queryString, params) {
        const pool = await connection();
        const [rows, fields] = await pool.execute(queryString, params);
        return rows;
    }
}