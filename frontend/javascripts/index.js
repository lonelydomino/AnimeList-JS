
const openOverlayWindow = (action) => {
    document.getElementById("myNav").style.width = "100%";
    action()
}

const showHome = () => {
    contentDiv().innerHTML = `<img id="logo" src="./assets/animelistlogo6.png">`
}
  
const closeOverlayWindow = () => {
    document.getElementById("myNav").style.width = "0%";
    document.querySelector("#form-overlay").innerHTML = ""

} 
const closeNewListsWindow = () => {
    document.querySelector("#form-overlay").innerHTML = ""
}

const showLogin = () => {
    document.querySelector("#myNav").innerHTML = `
    <div class="form" id="login-form">
      <a href="javascript:void(0)" class="closebtn-login" onclick="closeOverlayWindow()">&times;</a>
      <div class="title">Welcome!</div>
      <div class="subtitle">Log in here</div>
      <div class="input-container ic2">
        <input id="email" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="email" class="placeholder">Email</label>
      </div>
      <div class="input-container ic2">
        <input id="password" class="input" type="text" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="password" class="placeholder">Password</>
      </div>
      <button type="text" class="submit-login">submit</button>
    </div>`
    document.querySelector(".submit-login").addEventListener("click", UserApi.fetchUsers)
}

const showLists = () => {
    //List.clearListsTable()
    List.renderListTable()
    const userList = List.all.filter(element => {
        return element.user_id === UserApi.current_user_id
    })
    userList.forEach(element => {
        element.render()
    });
}

const showListsForm = () => {
    document.querySelector("#form-overlay").innerHTML = `
    <form class="form" id="lists-form">
      <a href="javascript:void(0)" class="closebtn-login" onclick="closeNewListsWindow()">&times;</a>
      <div class="title">Create a new list</div>
      <div class="input-container ic2">
        <input id="list-name-input" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="list-name-input" class="placeholder">List Name</label>
      </div>
      <div class="input-container ic2">
        <input id="list-desc-input" class="input" type="text" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="list-desc-input" class="placeholder">Description</>
      </div>
      <input type="submit" value="Create" class="submit-login">
    </form>`
    // document.querySelector(".submit-login").addEventListener("click", handleSubmitList)
    listsForm().addEventListener("submit", handleSubmitList)
}
 const handleSubmitList = (event) => {
     event.preventDefault()
     const data = {
         name: newListName().value,
         desc: newListDesc().value,
         user_id: UserApi.current_user_id
     }
     fetch("http://localhost:3000/lists", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
     })
        .then(resp => resp.json())
        .then(json => {
            let list = new List(json)
            list.render()
            listsForm().remove()
    })
 }



  // homeButton().addEventListener("click", showHome)



  var w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById('bubble'),
    ctx = canvas.getContext('2d'),
    rate = 60,
    arc = 100,
    time,
    count,
    size = 7,
    speed = 20,
    lights = new Array,
    colors = ['#d59254','#ffffff','#1f2839','#cf7693'];

canvas.setAttribute('width',w);
canvas.setAttribute('height',h);

function init() {
  time = 0;
  count = 0;

  for(var i = 0; i < arc; i++) {
    lights[i] = {
      x: Math.ceil(Math.random() * w),
      y: Math.ceil(Math.random() * h),
      toX: Math.random() * 5 + 1,
      toY: Math.random() * 5 + 1,
      c: colors[Math.floor(Math.random()*colors.length)],
      size: Math.random() * size
    }
  }
}

function bubble() {
  ctx.clearRect(0,0,w,h);

  for(var i = 0; i < arc; i++) {
    var li = lights[i];
    
    ctx.beginPath();
    ctx.arc(li.x,li.y,li.size,0,Math.PI*2,false);
    ctx.fillStyle = li.c;
    ctx.fill();
    
    li.x = li.x + li.toX * (time * 0.05);
    li.y = li.y + li.toY * (time * 0.05);
    
    if(li.x > w) { li.x = 0; }
    if(li.y > h) { li.y = 0; }
    if(li.x < 0) { li.x = w; }
    if(li.y < 0) { li.y = h; }
  }
  if(time < speed) {
    time++;
  }
  timerID = setTimeout(bubble,1000/rate);
}
init();
bubble(); 

//navigation (this is my code)
var animation = 'easeOutCubic';
    delay     = 60;

$(document)
  .on('click', '.fa-bars', function(){
    var i = 0;
    $('nav').before($('#bubble'));
    $('#bubble').fadeIn();
    $('#mainnav').find('li').each(function(){
      var that = $(this);
      i++;
      (function(i, that){
          setTimeout(function(){
            that
              .animate(
                { 'left'   : '0px' }, 
                { duration : 350, 
                  easing   : animation })
              .fadeIn({queue: false});
          }, delay * i)
      }(i, that))
    }); 
    $('.fa-bars').fadeOut(100,function(){
      $(this)
        .removeClass('fa-bars')
        .addClass('fa-times')
        .fadeIn(); 
    });
  })
  .on('click', '#bubble, .fa-times', function(){ 
    $('#bubble').fadeOut();
    $('#mainnav').find('li')
      .animate(
        { 'left'   : '-550px' }, 
        { duration : 250 })
      .fadeOut({queue: false});
    
    $('.hamb').fadeOut(100, function(){
      $(this)
        .find($('i'))
        .removeClass('fa-times')
        .addClass('fa-bars')
        .end()
        .fadeIn();
    });
  })