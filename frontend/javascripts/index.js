
const openOverlayWindow = (action) => {
    document.getElementById("myNav").style.width = "100%";
    action()
}






  

const closeNewListsWindow = () => {
    document.querySelector("#form-overlay").innerHTML = ""
}
const closeLoginWindow = () => {
  document.querySelector("#login-overlay").innerHTML = ""
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



  // homeButton().addEventListener("click", showHome)





    // $(function() {
    //   $('.toggle-overlay').click(function() {
    //     $('nav').before($('#bubble'));
    //     $('#bubble').fadeIn();
    //     $('aside2').toggleClass('open');
    //   });
    // });
