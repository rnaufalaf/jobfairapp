const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

const tokenGenerator = (data) => {
  const { id, email, username, phone, country, image } = data;
  return jwt.sign({ id, email, username, phone, country, image }, secretKey);
};

const tokenVerifier = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = { tokenGenerator, tokenVerifier };
