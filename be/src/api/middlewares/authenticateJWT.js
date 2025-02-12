import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  token = token.split("Bearer ")[1];
  const jwtSecret = process.env.ACCESS_TOKEN_SECRET;

  jwt.verify(token, jwtSecret, (error, decoded) => {
    if (error) {
      return res.status(403).send({
        message: error.message,
      });
    }

    req.userID = decoded._id;
    next();
  });
};

export default verifyToken;
