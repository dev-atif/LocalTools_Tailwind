const express = require("express");
const app = express();
require("./DataBase/connection");
const User = require("./DataBase/User");
const cors = require("cors");
app.use(express.json());
app.use(cors());

//JASON WEB TOKEN
const Jwt = require("jsonwebtoken");
const Jwtkey = "local";

//Registration Code ---------------------------------------------------------

app.post("/register", async (req, resp) => {
  try {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.pasword;
    delete result.confirmpasword;
    Jwt.sign({  result }, Jwtkey, (err, token) => {
      resp.send({  result, auth: token });
    });
  } catch (error) {
    console.error("Error creating user:", error);
    resp.status(500).send("Error creating user");
  }
});

/* ------------------------------------------------------------------------------------------------ */
/* --Login APi ------------------------------------------------------------------------------------- */

app.post("/login", async (req, resp) => {
  let user = await User.findOne(req.body).select("-pasword -confirmpasword");
  if (req.body.pasword && req.body.email) {
    if (user) {
      //If user find then apply JWT
      Jwt.sign({ user }, Jwtkey, (err, token) => {
        resp.send({ user, auth: token });
      });
    } else {
      resp.send("No User Found");
    }
  } else {
    resp.send("Enter All Fields");
  }
});

/* ------------------------------------------------------------------------------------------------- */

//Middle Wear  Function For Jwt  -----------------------------------------------------

function Protection(req, res, next) {
  let token = req.headers["authorization"];
}
app.listen(3000);
