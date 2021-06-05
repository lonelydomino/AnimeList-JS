const homeButton = () => document.querySelector("#home-button")

const openOverlayWindow = (action) => {
    document.getElementById("myNav").style.width = "100%";
    action()
}

const showHome = () => {
    contentDiv().innerHTML = `<img id="logo" src="./assets/animelistlogo6.png">`
}
  
const closeOverlayWindow = () => {
    document.getElementById("myNav").style.width = "0%";
} 

const showLogin = () => {
    document.querySelector("#myNav").innerHTML = `
    <div class="form" id="login-form">
      <a href="javascript:void(0)" class="closebtn-login" onclick="closeOverlayWindow()">&times;</a>
      <div class="title">Welcome!</div>
      <div class="subtitle">Log in here</div>
      <div class="input-container ic2">
        <input id="email" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="email" class="placeholder">Email</label>
      </div>
      <div class="input-container ic2">
        <input id="password" class="input" type="text" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="password" class="placeholder">Password</>
      </div>
      <button type="text" class="submit-login">submit</button>
    </div>`
    document.querySelector(".submit-login").addEventListener("click", UserApi.fetchUsers)
}

const showLists = () => {
    document.querySelector("#myNav").innerHTML = `
        <a href="javascript:void(0)" class="closebtn" onclick="closeOverlayWindow()">&times;</a>
        <div class="lists-overlay-content">
            <div class="list-window">
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Action</td>
                            <td>action animes</td>
                            <td> X</td>
                        </tr>
                        <tr>
                            <td>Demon Animes</td>
                            <td>like inuyasha</td>
                            <td> X</td>
                        </tr>
                        <tr>
                            <td>Cool stuff</td>
                            <td>my faves</td>
                            <td>X</td>
                        </tr>
                        <tr class="active-row">
                            <td>Romance </td>
                            <td>cute stuff</td>
                            <td> X</td>
                        </tr>
                    </tbody>
                </table>
                <button>Create new list</button>
            </div>
        </div>
        `
}




  homeButton().addEventListener("click", showHome)