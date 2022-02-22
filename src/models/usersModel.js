const connection = require('./connection');

const findByEmail = async (email) => {
  const emailFound = await connection()
    .then((db) => db.collection('users').findOne({ email }));
  return emailFound;
};

const createUser = async (data) => {
  const { name, email, password, role } = data;

  const { insertedId: _id } = await connection()
    .then((db) => db.collection('users').insertOne({ name, email, password, role }));
  
  return {
    user: {
      _id,
      name,
      email,
      role,
    },
  };
};

const updateRole = async (email, role) => {
  const updatedRole = await connection()
    .then((db) => db.collection('users').updateOne(
      { email: email },
      {
        $set: {
          role: role
        },
      }
    )
  );
  return updateRole;
}

module.exports = {
  createUser,
  findByEmail,
  updateRole,
};