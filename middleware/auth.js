//token authentication
//info https://carlosazaustre.es/que-es-la-autenticacion-con-token

//existe sesion ?
// verificar token
// next

const jsnWebTok = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (token) {
    try {
      const tokenKey = process.env.TOK_KEY;
      const load = jsnWebTok.verify(token, tokenKey);

      req.user = load;
      next();
    } catch {
      res.status(400).send("invalid token");
    }
  } else {
    //401 Unauthorized
    res.status(401).send("not authorized");
  }
}

module.exports=auth;