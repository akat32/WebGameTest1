module.exports = (router, http, io, path)=>{
  router.get('/',(req,res)=>{
    res.render('index.html');
  })
  return router;
}
