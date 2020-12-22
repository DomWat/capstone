require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    res.status(401).json({ error: "unauthorized" });
  }

  const bearerAndToken = authHeader.split(" ");
  const token = bearerAndToken[1];

  console.log(token);

  if (!token) {
    res.status(401).json({ error: "unauthorized" });
  }

  // checking if token recieved form client side is the correct one
  const decodedToken = jwt.verify(token, process.env.JWTKEY);

  if (!decodedToken) {
    res.status(401).json({ error: "unauthorized" });
  }

  req.tutor_id = decodedToken.tutor_id;
  req.student_id = decodedToken.student_id;

  next();
};
