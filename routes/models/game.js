module.exports = (router,io)=>{
  router.get('/', (req,res)=>{
    res.render('game1.html');
  })

  var objects = {};
  io.on('connection', (socket)=>{
    console.log('user connected: ', socket.id);
    objects[socket.id] = new UserObject();
    io.to(socket.id).emit('connected', GAME_SETTINGS);
    socket.on('disconnect', ()=>{ // 연결이 끊어지면
      delete objects[socket.id]; // 소켓 아이디를 지운다.
      console.log('user disconnected: ', socket.id);
    });
    socket.on('keydown', (keyCode)=>{ // 키가 눌리면
      objects[socket.id].keypress[keyCode]=true; // 키값을 저장
    });
    socket.on('keyup', (keyCode)=>{ // 키에서 손을 땐다면
      delete objects[socket.id].keypress[keyCode]; // 키값을 삭제
    });
  });
  var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
  var GAME_SETTINGS = {
    WIDTH : 600, HEIGHT : 400, BACKGROUND_COLOR : "#FFFFFF"
  };
  var update = setInterval(()=>{
    var idArray=[];
    var statusArray={};
    for(var id in io.sockets.clients().connected){ // 클라이언트 소켓이 연결되어 있는 동안.
      if(objects[id].keypress[LEFT])  objects[id].status.x -= 2; // 방향키
      if(objects[id].keypress[UP])    objects[id].status.y -= 2;
      if(objects[id].keypress[RIGHT]) objects[id].status.x += 2;
      if(objects[id].keypress[DOWN])  objects[id].status.y += 2; // 여기까지 방향키 입력
        idArray.push(id);
      statusArray[id]=objects[id].status;
    }
    io.emit('update',idArray, statusArray);
  },10);
  function UserObject(){
    var color="#";
    for(var i = 0; i < 6; i++ ){
      color += (Math.floor(Math.random()*16)).toString(16); // 색상정보 랜덤 생성
    }
    this.status = {};
    this.status.x = 0;
    this.status.y = 0;
    this.status.height = 20;
    this.status.width = 20;
    this.status.color = color;
    this.keypress = [];
  }

  return router;
}
