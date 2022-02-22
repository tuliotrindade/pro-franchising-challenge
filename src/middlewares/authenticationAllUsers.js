const jwt = require('jsonwebtoken');
const { findByEmail } = require('../models/usersModel')

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }
  try {
    const { _id, email } = jwt.verify(token, 'temumsegredoaqui');
    const user = await findByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'jwt malformed' });
    }
    req.id = _id ;
    next();
  } catch (err) {
    console.log(err)
    return res.status(401).json({ message: err.message });
  }
};

