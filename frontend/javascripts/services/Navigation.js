class Navigation {

    static addLoginButton = () => {
        let a = document.createElement("a")
        // a.className = "navbar-item"
        a.id = "navbar-login"
        // a.style.cssFloat = "right";
        a.onclick = Navigation.openLoginOverlay
        a.innerHTML = `Login`
        a.style.cursor = "pointer"
        document.querySelector(".links").appendChild(a)
    }

    static openListOverlayWindow = () => {
        List.showLists()
    }

    static openLoginOverlay = () => {
        document.getElementById("login-overlay").style.width = "100%";
        UserApi.showLogin()
    }

    // static openOverlayWindow = (action) => {
    //     document.getElementById("myNav").style.width = "100%";
    //     action()
    // }
    static closeOverlayWindow = () => {
        document.getElementById("myNav").style.width = "0%";
        document.querySelector("#form-overlay").innerHTML = ""
    
    } 

    static addRegisterButton = () => {
        let button = document.createElement("a")
        button.id = "register-button"
        button.innerHTML = "Register"
        button.style.cursor = "pointer"
        navLinks().appendChild(button)
        // <a href="#" id="register-button">Register</a>
    
    }
    
    static closeNewListsWindow = () => {
        document.querySelector("#form-overlay").innerHTML = ""
    }
    static closeLoginWindow = () => {
      document.querySelector("#login-overlay").innerHTML = ""
    }
    // static showHome = () => {
    //     contentDiv().innerHTML = `<img id="logo" src="./assets/animelistlogo6.png">`
    // }

}