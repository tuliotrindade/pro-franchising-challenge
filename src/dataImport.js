const connection = require('./models/connection');

const seed = {
  name:'admin',
  email:'admin@admin.com',
  password:'admin',
  role:'admin'
}

const createAdmin = async () => {
  await connection().then((db) => db.collection('users').insertOne(seed));
};

createAdmin().then(() => process.exit(1));
