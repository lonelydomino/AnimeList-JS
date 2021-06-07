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
    //List.clearListsTable()
    List.renderListTable()
    const userList = List.all.filter(element => {
        return element.user_id === UserApi.current_user_id
    })
    userList.forEach(element => {
        element.render()
    });
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
      <input type="submit" value="Create" class="submit-login">
    </form>`
    // document.querySelector(".submit-login").addEventListener("click", handleSubmitList)
    listsForm().addEventListener("submit", handleSubmitList)
}
 const handleSubmitList = (event) => {
     event.preventDefault()
     const data = {
         name: newListName().value,
         desc: newListDesc().value,
         user_id: UserApi.current_user_id
     }
     fetch("http://localhost:3000/lists", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
     })
        .then(resp => resp.json())
        .then(json => {
            let list = new List(json)
            list.render()
            listsForm().remove()
    })
 }



  homeButton().addEventListener("click", showHome)