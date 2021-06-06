class UserApi {
    static current_user_id = ""
    static password = ""
    static email = ""

    static getCurrentUserId() {
        return this.current_user_id
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
                addLogoutButton()
                addListsButton()
                closeOverlayWindow()
            }
            else {
                UserApi.password = ""
                UserApi.email = ""
                console.log("Login failed!")
                //Login failed
                //show failure message
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
        document.querySelector("#navbar-logout").remove()
        document.querySelector("#navbar-lists").remove()
        addLoginButton()
    }
}