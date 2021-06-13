class List {
    
    static all =[]

    constructor({name, desc, user, id}) {
        this.name = name
        this.desc = desc
        this.user_id = user.id
        this.id = id
        List.all.push(this)
    }

    static findByName(name) {
        let item = List.all.find(element => name == element.name)
        return item
    }

    static findById(id) {
        return this.all.find(list => list.id === id)
    }
    static clearListsTable() {
        List.all = []
    }

    static findOrCreateBy(listObj) { 
        return this.findByName(listObj.name) || new List(listObj)
    }
    static handleDelete = (e) => {
        fetch(`http://localhost:3000/lists/${e.target.dataset.list_id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json'
            }
        })
        .then(resp => {
            debugger
            e.target.parentElement.remove()
            let list = List.findById(parseInt(e.target.dataset.list_id))
            let index = List.all.indexOf(list)
            List.all.splice(index, 1)
        }
        )
    }

    render() {
        let li = document.createElement("li")
        li.className = "table-row"

        let tdListName = document.createElement("div")
        tdListName.className = "col col-2"
        tdListName.innerHTML = this.name
        tdListName.dataset.list_id = this.id
        tdListName.style.cursor = "pointer"

        let tdListDesc = document.createElement("div")
        tdListDesc.className = "col col-3"
        tdListDesc.innerHTML = this.desc
        tdListDesc.dataset.list_id = this.id

        let tdX = document.createElement("div")
        tdX.className = "col col-4"
        tdX.innerHTML = "X"
        tdX.style.cursor = "pointer"
        tdX.addEventListener("click", List.handleDelete)
        tdX.dataset.list_id = this.id
        
        AnimeApi.fetchAnimes(this.id)
        tdListName.onclick = ListApi.handleAnimeOverlay
        tdListDesc.onclick = ListApi.handleAnimeOverlay
    
        li.appendChild(tdListName)
        li.appendChild(tdListDesc)
        li.appendChild(tdX)
        document.querySelector("#lists-table").appendChild(li)

    }

    static renderListTable() {
        document.querySelector("#list-nav").innerHTML = `
        <div class="outer-close">
        <a class="close"><span></span></a>
        </div>

            <h2 id="anime-table-name">My Lists</h2>
            <ul class="responsive-table" id="lists-table" style="left: 8%;width: 90%;position: absolute;">
                  <li class="table-header">
                    <div class="col col-2">List Name</div>
                    <div class="col col-3">Description</div>
                    <div class="col col-4"></div>
                  </li>
                 
            </ul>
            
            `
        //     <li class="table-row" id="lists-form-button" onclick="List.showListsForm()">
        //     <div class="list-delete" data-label="Customer Name" style="left: 42%; position: relative;">Add new list</div>
        //   </li>
           
    }


static showLists = () => {
    List.renderListTable()
    const userList = List.all.filter(element => {
        return element.user_id === UserApi.current_user_id
    })
    userList.forEach(element => {
        element.render()
    });
    List.addNewListsButton()
}

static addNewListsButton = () => {
    let addNewListLi = document.createElement("li")
    addNewListLi.className = "table-row"
    addNewListLi.style.cursor = "pointer"
    addNewListLi.id = "add-lists-button"
    addNewListLi.style = "background: #283082;color: white;cursor: pointer;"
    addNewListLi.onclick = List.showListsForm
    addNewListLi.innerHTML = `<div class="list-add" data-label="Customer Name" style="left: 42%; position: relative;cursor: pointer;">Add new list</div>`
    document.querySelector(".responsive-table").appendChild(addNewListLi)
}
static showListsForm = () => {
    document.querySelector("#form-overlay").innerHTML = `
    <form class="form" id="lists-form">
        <a href="javascript:void(0)" class="closebtn-login" onclick="Navigation.closeNewListsWindow()">&times;</a>
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
    
    listsForm().addEventListener("submit", List.handleSubmitList)
}

static handleSubmitList = (event) => {
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
            
            document.querySelector("#add-lists-button").remove()
            list.render()
            List.addNewListsButton()
            listsForm().remove()
    })
}
    


}