class Navigation {
    static addLoginButton = () => {
        let a = document.createElement("a")
        a.id = "navbar-login"
        a.onclick = Navigation.openLoginOverlay
        a.innerHTML = `Login`
        a.style.cursor = "pointer"
        document.querySelector(".links").appendChild(a)
    }
   
    static openLoginOverlay = () => {
        document.getElementById("login-overlay").style.width = "100%";
        UserApi.showLogin()
    }
  
    static addRegisterButton = () => {
        let button = document.createElement("a")
        button.id = "register-button"
        button.innerHTML = "Register"
        button.style.cursor = "pointer"
        button.onclick = Navigation.openRegistrationOverlay
        navLinks().appendChild(button)    
    }
    static openRegistrationOverlay = () => {
        document.getElementById("login-overlay").style.width = "100%";
        UserApi.showRegistration()
    }
    static closeOverlayWindow = () => {
        document.getElementById("myNav").style.width = "0%";
        document.querySelector("#form-overlay").innerHTML = ""
    
    } 
    static openListOverlayWindow = () => {
        List.showLists()
    }
    static closeNewListsWindow = () => {
        document.querySelector("#form-overlay").innerHTML = ""
    }
    static closeLoginWindow = () => {
      document.querySelector("#login-overlay").innerHTML = ""
    }

}