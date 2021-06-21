const navbar = () => document.querySelector("#navbar")
const contentDiv = () => document.querySelector("#content")
const listsForm = () => document.querySelector("#lists-form")
const newListName = () => document.querySelector("#list-name-input")
const newListDesc = () => document.querySelector("#list-desc-input")
const listTableBody = () => document.querySelector("#list-table-body")
const searchButton = () => document.querySelector("#search-button")
const searchForm = () => document.querySelector("#search-form")
const listSelectBox = () => document.querySelector("#list-select-box")
const flash = () => document.querySelector("#flash")
const animeTableOverlay = () => document.querySelector("#anime-table-overlay")
const homeButton = () => document.querySelector("#home-button")
const animeTiles = () => document.querySelector(".tilesWrap")
const navLinks = () => document.querySelector(".links")
const navLine = () => document.querySelector(".line")
const registerButton = () => document.querySelector("#register-button")

const correctNavLine = () => {
    navLine().remove()
    let span = document.createElement("span")
    span.className = "line"
    navLinks().appendChild(span)
    // `<span class="line"></span>`

}

const removeRegisterButton = () => {
    registerButton().remove()
}

const addListsButton = () => {
    let a = document.createElement("a")
        // a.className = "navbar-item"
        a.id = "navbar-lists"
        // id="lists-button"
        a.onclick = changeVisible
        a.className = "toggle-overlay"
        a.innerHTML = `Lists`
        a.style.cursor = "pointer"

        document.querySelector(".links").appendChild(a)
}
const addLogoutButton = () => {
    let a = document.createElement("a")
        // a.className = "navbar-item"
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
  
  // modern Chrome requires { passive: false } when adding event
  var supportsPassive = false;
  try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
      get: function () { supportsPassive = true; } 
    }));
  } catch(e) {}
  
  const wheelOpt = supportsPassive ? { passive: false } : false;
  const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
  
  // call this to Disable
  const disableScroll = () => {
    window.addEventListener(wheelEvent, preventDefaultScrollingWheel, wheelOpt); // modern desktop
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  }
  
  // call this to Enable
  const enableScroll = () => {
    window.removeEventListener(wheelEvent, preventDefaultScrollingWheel, wheelOpt); 
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  }