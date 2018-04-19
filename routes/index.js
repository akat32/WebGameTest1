module.exports = (express, router,  http, io, path)=>{
  var router = express.Router();
  var auth = require('./models/auth')(router, express, path);
  var game = require('./models/game')(router, express, path);

  router.use('/game', game);
  router.use('/auth', auth);
  return router;
}
