
const correctNavLine = () => {
    navLine().remove()
    let span = document.createElement("span")
    span.className = "line"
    navLinks().appendChild(span)
}

const removeRegisterButton = () => {
    registerButton().remove()
}

const addListsButton = () => {
    let a = document.createElement("a")
        a.id = "navbar-lists"
        a.onclick = changeVisible
        a.className = "toggle-overlay"
        a.innerHTML = `Lists`
        a.style.cursor = "pointer"
        document.querySelector(".links").appendChild(a)
}
const addLogoutButton = () => {
    let a = document.createElement("a")
        a.id = "navbar-logout"
        a.onclick = UserApi.logout
        a.style.cursor = "pointer"
        a.innerHTML = `Log Out`
        document.querySelector(".links").appendChild(a)
}

const changeVisible = () => {
    Navigation.openListOverlayWindow()
    document.querySelector("#bubble").style.display = "flex"
}

const keys = {37: 1, 38: 1, 39: 1, 40: 1};
const preventDefaultScrollingWheel = (e) => {
    e.preventDefault();
}
  
const preventDefaultForScrollKeys = (e) =>{
    if (keys[e.keyCode]) {
      preventDefaultScrollingWheel(e);
      return false;
    }
  }
  
  var supportsPassive = false;
  try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
      get: function () { supportsPassive = true; } 
    }));
  } catch(e) {}
  
  const wheelOpt = supportsPassive ? { passive: false } : false;
  const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
 
  const disableScroll = () => {
    window.addEventListener(wheelEvent, preventDefaultScrollingWheel, wheelOpt);
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  }
  
  const enableScroll = () => {
    window.removeEventListener(wheelEvent, preventDefaultScrollingWheel, wheelOpt); 
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  }