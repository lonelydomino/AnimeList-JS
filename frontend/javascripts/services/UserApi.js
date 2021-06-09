class UserApi {
    static current_user_id = 2
    static password = ""
    static email = ""

    static getCurrentUserId = () => {
        return this.current_user_id
    }

    static handleLoginFailure = () => {
        flash().innerText = "Log in failed!"
        flash().classList.remove("hide")
        flash().classList.add("flash-warning")
        setTimeout(() => {
            flash().innerText = ""
            flash().classList.remove("flash-warning")
            flash().classList.add("hide")
        }, 3000)
    }
    static handleLogoutNotification = () => {
        flash().innerText = "Signed out!"
        flash().classList.remove("hide")
        flash().classList.add("flash-notification")
        setTimeout(() => {
            flash().innerText = ""
            flash().classList.remove("flash-notification")
            flash().classList.add("hide")
        }, 3000)
    }
    static fetchUsers() {
        UserApi.password = document.querySelector("#password").value
        UserApi.email = document.querySelector("#email").value
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(json => {
            let found = json.find(element => UserApi.findUser(element.email, element.password)) 
            if(found){
                UserApi.current_user_id = found.id
                document.querySelector("#navbar-login").remove()
                console.log("Login successful!")
                ListApi.fetchLists()
                addLogoutButton()
                addListsButton()
                closeOverlayWindow()
            }
            else {
                UserApi.password = ""
                UserApi.email = ""
                UserApi.handleLoginFailure()
                console.log("Login failed!")
            }
        })
    }

    static findUser(tempEmail, tempPassword) {
        if (tempEmail === UserApi.email && tempPassword === UserApi.password){
            return true
         } else{
            return false
        }
    }
      
    static logout() {
        UserApi.current_user_id = ""
        List.clearListsTable()
        document.querySelector("#navbar-logout").remove()
        document.querySelector("#navbar-lists").remove()
        addLoginButton()
        UserApi.handleLogoutNotification()
    }

  
    
}