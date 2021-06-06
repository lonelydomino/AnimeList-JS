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
    document.querySelector("#form-overlay").innerHTML = ""

} 
const closeNewListsWindow = () => {
    document.querySelector("#form-overlay").innerHTML = ""
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
                <button onclick="showListsForm()" id="lists-form-button">Create new list</button>
            </div>
        </div>
        `
}

const showListsForm = () => {
    document.querySelector("#form-overlay").innerHTML = `
    <form class="form" id="lists-form">
      <a href="javascript:void(0)" class="closebtn-login" onclick="closeNewListsWindow()">&times;</a>
      <div class="title">Create a new list</div>
      <div class="input-container ic2">
        <input id="list-name-input" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="list-name-input" class="placeholder">List Name</label>
      </div>
      <div class="input-container ic2">
        <input id="list-desc-input" class="input" type="text" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="list-desc-input" class="placeholder">Description</>
      </div>
      <button type="text" class="submit-login">submit</button>
    </form>`
    document.querySelector(".submit-login").addEventListener("click", handleSubmitList)
}
 const handleSubmitList = () => {
     const data = {
         name: newListName().value,
         desc: newListDesc().value,
         user_id: UserApi.current_user_id
     }
     fetch("http://localhost:3000/lists"), {
         method: 'POST',
         headers: {
             "Content-Type": 'application/json'
         }
     }
     
 }



  homeButton().addEventListener("click", showHome)