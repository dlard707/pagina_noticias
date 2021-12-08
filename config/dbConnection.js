const {Pool} = require('pg');

const client = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgres://iuqfakxprcuhwm:0e394da18a5681c1c34621a0468a1511b1e0e2409aa03a6527c2cf552371141a@ec2-18-215-111-67.compute-1.amazonaws.com:5432/dcht9bpuq26t64',
    ssl: {
        rejectUnauthorized: false
    }
});

//teste de conexão

// async function connectTeste() {

//     const res = await client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
//         console.log(res.rows[0].message)
//     });
// }

// connectTeste();

module.exports = client;