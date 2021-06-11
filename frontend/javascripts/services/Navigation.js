class Navigation {

    static addLoginButton = () => {
        let a = document.createElement("a")
        // a.className = "navbar-item"
        a.id = "navbar-login"
        // a.style.cssFloat = "right";
        a.onclick = Navigation.openLoginOverlay
        a.innerHTML = `Login`
        document.querySelector(".links").appendChild(a)
    }

    static openListOverlayWindow = () => {
        showLists()
    }

    static openLoginOverlay = () => {
        document.getElementById("login-overlay").style.width = "100%";
        UserApi.showLogin()
    }

    static closeOverlayWindow = () => {
        document.getElementById("myNav").style.width = "0%";
        document.querySelector("#form-overlay").innerHTML = ""
    
    } 
    // static showHome = () => {
    //     contentDiv().innerHTML = `<img id="logo" src="./assets/animelistlogo6.png">`
    // }

}