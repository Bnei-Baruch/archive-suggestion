const { Client } = require('pg');
client = new Client({
    host: '127.0.0.1',
    // user: 'username',
    // password: 'password',
    database: 'mdb',
});

client.connect();

client.query('SELECT * FROM content_types', (err, res) => {
    console.log(err, res.rows)
    client.end()
  })
