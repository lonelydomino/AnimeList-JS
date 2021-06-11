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
        document.querySelector(".links").appendChild(a)
}
const addLogoutButton = () => {
    let a = document.createElement("a")
        // a.className = "navbar-item"
        a.id = "navbar-logout"
        a.onclick = UserApi.logout
        a.innerHTML = `Log Out`
        document.querySelector(".links").appendChild(a)
}

const changeVisible = () => {
    Navigation.openListOverlayWindow()
    document.querySelector("#bubble").style.display = "flex"
}
