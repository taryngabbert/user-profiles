const homeRoutes = require ('./home/homeRoutes');
const profileRoutes = require ('./profile/profileRoutes');

module.exports= app => {
  homeRoutes(app);
  profileRoutes(app);
}
