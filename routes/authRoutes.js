const passport = require("passport");

module.exports = app => {
  //GOOGLE OAUTH
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  //FACEBOOK OAUTH

  app.get(
    "/auth/facebook",
    passport.authenticate("facebook", { scope: ["email"] })
  );

  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", { failureRedirect: "/login" })
  );

  // LOG USER OUT

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // SEE CURRENT USER
  app.get("/api/current_user", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.send(req.user);
  });
};
