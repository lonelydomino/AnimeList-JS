class UserApi {
    static current_user_id = ""
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
    static handleLoginSuccess = () => {
        flash().innerText = "Log in successful!"
        flash().classList.remove("hide")
        flash().classList.add("flash-success")
        setTimeout(() => {
            flash().innerText = ""
            flash().classList.remove("flash-success")
            flash().classList.add("hide")
        }, 3000)
    }
    static handleRegistrationSuccess = () => {
        flash().innerText = "Registration successful!"
        flash().classList.remove("hide")
        flash().classList.add("flash-success")
        setTimeout(() => {
            flash().innerText = ""
            flash().classList.remove("flash-success")
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
            let user = json.find(element => UserApi.findUser(element.email, element.password)) 
            UserApi.userFound(user)
        })
        .catch(this.handleError)
    }
    static handleError(error) {
        flash().innerText = error
        flash().classList.remove("hide")
        flash().classList.add("flash-warning")
        setTimeout(() => {
            flash().innerText = ""
            flash().classList.remove("flash-warning")
            flash().classList.add("hide")
        }, 3000)
    }
    static userFound(user){
        if(user){
            UserApi.current_user_id = user.id
            document.querySelector("#navbar-login").remove()
            console.log("Login successful!")
            ListApi.fetchLists()
            addListsButton()
            addLogoutButton()  
            UserApi.handleLoginSuccess()
            navLinks().style = "--items: 2;"
            removeRegisterButton()
            correctNavLine()
            document.querySelector("#login-overlay").innerHTML = ""
        }
        else {
            UserApi.password = ""
            UserApi.email = ""
            UserApi.handleLoginFailure()
            console.log("Login failed!")
        }
    }

    static findUser(tempEmail, tempPassword) {
        if (tempEmail === UserApi.email && tempPassword === UserApi.password){
            return true
         } else{
            return false
        }
    }
    static showLogin = () => {
        document.querySelector("#login-overlay").innerHTML = `
        <div class="form" id="login-form">
          <a href="javascript:void(0)" class="closebtn-login" onclick="Navigation.closeLoginWindow()">&times;</a>
          <div class="title">Welcome!</div>
          <div class="subtitle">Log in here</div>
          <div class="input-container ic2">
            <input id="email" class="input" type="text" placeholder=" " value="milo@gmail.com" />
            <div class="cut"></div>
            <label for="email" class="placeholder">Email</label>
          </div>
          <div class="input-container ic2">
            <input id="password" class="input" value="123456" type="password" placeholder=" " />
            <div class="cut cut-short"></div>
            <label for="password" class="placeholder">Password</>
          </div>
          <button type="text" class="submit-login">submit</button>
        </div>`
        document.querySelector(".submit-login").addEventListener("click", UserApi.fetchUsers)
    }
      
    static logout() {
        UserApi.current_user_id = ""
            document.querySelector("#navbar-logout").remove()
        document.querySelector("#navbar-lists").remove()
        Navigation.addLoginButton()
        Navigation.addRegisterButton()
        correctNavLine()
        UserApi.handleLogoutNotification()
    }

    static showRegistration = () => {
        document.querySelector("#login-overlay").innerHTML = `
        <div class="form" id="login-form" style="height: 588px;">
          <a href="javascript:void(0)" class="closebtn-login" onclick="Navigation.closeLoginWindow()">&times;</a>
          <div class="title">Welcome!</div>
          <div class="subtitle">Register here</div>
          <div class="input-container ic2">
            <input id="email" class="input" type="text" placeholder=" " value="milo@gmail.com" />
            <div class="cut"></div>
            <label for="email" class="placeholder">Email</label>
          </div>
          <div class="input-container ic2">
            <input id="password" class="input" value="123456" type="password" placeholder=" " />
            <div class="cut cut-short"></div>
            <label for="password" class="placeholder">Password</>
          </div>
          <div class="input-container ic2">
            <input id="first-name" class="input" value="Bob" type="text" placeholder=" " />
            <div class="cut cut-short"></div>
            <label for="last-name" class="placeholder">First Name</>
          </div>
          <div class="input-container ic2">
            <input id="last-name" class="input" value="Johnson" type="text" placeholder=" " />
            <div class="cut cut-short"></div>
            <label for="last-name" class="placeholder">Last Name</>
          </div>
          <button type="text" class="submit-login">submit</button>
        </div>`
        document.querySelector(".submit-login").addEventListener("click", UserApi.createUser)
    }
    static createUser = () => {
        event.preventDefault()
        const data = {
            last_name: document.querySelector("#last-name").value,
            first_name: document.querySelector("#first-name").value,
            password: document.querySelector("#password").value,
            email: document.querySelector("#email").value
        }
        fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => {
            if (!resp.ok) {
                return Promise.reject(resp)

            } else {
                return resp.json()
            }
        })
        .then(json=>{
            UserApi.current_user_id = json.id
            document.querySelector("#navbar-login").remove()
            console.log(`Registation successful! User ID is ${UserApi.current_user_id}`)
            ListApi.fetchLists()
            addListsButton()
            addLogoutButton()  
            navLinks().style = "--items: 2;"
            removeRegisterButton()
            correctNavLine()
            this.handleRegistrationSuccess()
            document.querySelector("#login-overlay").innerHTML = ""
        })
        .catch(err => err.json().then(err =>{
            if (err.email) {
                this.handleError("Email " + err.email[0])
            }
            if (err.password) {
                this.handleError("Password " + err.password[0])
            }
            
        }))

        
    }

  
    
}