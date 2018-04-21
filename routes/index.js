module.exports = (express, fs, path)=>{
  let router = express.Router();
  
  let auth = require('./models/auth')(express.Router(),fs,path);
  let game = require('./models/game')(express.Router(),fs,path);

  router.use('/game', game);
  router.use('/auth', auth);
  
  return router;
}
