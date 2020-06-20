const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // Read the header's token
  const token = req.header('x-auth-token');

  // Check if there is no token
  if(!token) {
    return res.status(401).json({ msg: 'No token found, permission denied'})
  }

  // Validate token
  try {
    const encryptedToken = jwt.verify(token, process.env.SECRET);
    req.user = encryptedToken.user;
    next();
  } catch (error) {
    res.status(401).json({msg: 'Invalid Token'});
  }
}