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

//navigation
var animation = 'easeOutCubic';
delay = 60;

$(document)
.on('click', '.toggle-overlay', function(){
  var i = 0;
  $('#list-nav').before($('#bubble'));
  // $('#bubble').css("display", "block")
  $('#bubble').fadeIn();
  $('aside2').removeClass('close');
  $('aside2').addClass('open');
  
  $('.fa-bars').fadeOut(100,function(){
    $(this)
      .removeClass('fa-bars')
      .addClass('fa-times')
      .fadeIn(); 
  });
})
.on('click', '#bubble, .outer-close', function(){ 
  $('#bubble').fadeOut();
  $('aside2').removeClass('open');
  $('aside2').addClass('close');
  $('.hamb').fadeOut(100, function(){
    $(this)
      .find($('i'))
      .end()
      .fadeIn();
  });
})