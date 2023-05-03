const { verify } = require("jsonwebtoken");

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      token = token.slice(7);
      verify(token, "qwe1234", (err, decoded) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            error: 0,
            message: "verify  errror"
          });
        }else{
          next()
        }
      });
    } else {
      res.json({
        success: 0,
        message: "Access denied: unauthorized user",
      });
    }
  },
};
