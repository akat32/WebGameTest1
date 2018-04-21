module.exports = (express, fs, path,io)=>{
  let router = express.Router();
  let auth = require('./models/auth')(express.Router(),fs,path);
  let game = require('./models/game')(express.Router(),io);
  router.use('/game', game);
  router.use('/auth', auth);



  //test
  // console.log('router : ', router);
  // console.log('express.Router() : ', express.Router());
  // if(router === express.Router()) console.log('T')
  // else console.log('F')

  return router;
}
