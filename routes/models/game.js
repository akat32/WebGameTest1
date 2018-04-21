module.exports = (router,fs,path)=>{
  router.get('/', (req,res)=>{
    res.render('game1.html');
  })
  return router;
}
