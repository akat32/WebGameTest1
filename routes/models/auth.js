module.exports = (router,fs,path)=>{
  router.get('/',(req,res)=>{
    res.render('auth.html');
  })
  return router;
}
