const passport = require("passport");

module.exports = (app) => {
  // app.get("/", (req, res) => {
  //   res.send({ home: "Welcome to E-Kars!" });
  // });

  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));
};
