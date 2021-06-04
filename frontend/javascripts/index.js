const homeButton = () => document.querySelector("#home-button")
const openOverlayWindow = (action) => {
    document.getElementById("myNav").style.width = "100%";
    action()
  }
  
const closeOverlayWindow = () => {
    document.getElementById("myNav").style.width = "0%";
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

const showHome = () => {
    contentDiv().innerHTML = `<img id="logo" src="./assets/animelistlogo6.png">`
}


  homeButton().addEventListener("click", showHome)