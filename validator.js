module.exports = function validateUser(data) {
  if (data.user === "boream" && data.password === "boreanitos") {
    return true;
  }

  return false;
};
