module.exports = (router, express, path)=>{
  router.get('/',(req,res)=>{
    res.render('auth.html');
  })
  return router;
}
