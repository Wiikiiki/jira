module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "wiki" && req.body.password === "123") {
      console.log(res.status());
      return res.status(200).json({
        user: {
          token: "333",
        },
      });
    }
  } else {
    console.log("400");
    return res.status(400).json({ message: "用户名或密码错误" });
  }
  next();
};
