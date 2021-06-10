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

const addLoginButton = () => {
    let li = document.createElement("li")
        li.className = "navbar-item"
        li.id = "navbar=login"
        li.style.cssFloat = "right";
        li.innerHTML = `<a href="#" onclick="openOverlayWindow(showLogin)" id="navbar-login">Login</a>`
        document.querySelector("#navbar").appendChild(li)
}
const addListsButton = () => {
    let li = document.createElement("li")
        li.className = "navbar-item"
        li.id = "navbar-lists"
        li.innerHTML = `<a href="#" onclick="openOverlayWindow(showLists)" id="lists-button">Lists</a>`
        document.querySelector("#navbar").appendChild(li)
}
const addLogoutButton = () => {
    let li = document.createElement("li")
        li.className = "navbar-item"
        li.innerHTML = `<a href="#" onclick="UserApi.logout()" id="navbar-logout">Log Out</a>`
        document.querySelector("#navbar").appendChild(li)
}

