const adminAuth = (req, res, next) => {
  console.log("admin chcking");
  const token = "xyz";
  const isAuth = token === "xyz";
  if (!isAuth) {
    res.status(401).send("not approved");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log("user chcking");
  const token = "xyz";
  const isAuth = token === "xyz";
  if (!isAuth) {
    res.status(401).send("not approved");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
