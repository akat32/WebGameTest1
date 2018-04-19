module.exports = (express, router,  http, io, path)=>{
  var router = express.Router();
  var auth = require('./models/auth')(router, express, path);
  var game = require('./models/game')(router, http, io, path);
  router.get('/', (req,res)=>{res.send('asd')})

  router.use('/auth', auth);
  router.use('/game', game);
  return router;
}
