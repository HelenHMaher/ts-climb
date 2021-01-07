//middleware that ensures the user is authenticated

module.exports = function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(400).json({ msg: 'not authenticated' });
};
