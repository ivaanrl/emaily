const passport = require("passport");

module.exports = app => {
  //GOOGLE OAUTH
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

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
    res.send(req.user);
  });

  // SEE CURRENT USER
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
