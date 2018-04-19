module.exports = (router,express, path)=>{
  router.get('/', (req,res)=>{
    res.render('game1.html');
  })
  return router;
}
