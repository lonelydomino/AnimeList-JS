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
            e.target.parentNode.remove()
            let list = List.findById(parseInt(e.target.id))
            let index = List.all.indexOf(list)
            List.all.splice(index, 1)
        }
        )
    }

    render() {
        let tr = document.createElement("tr")
        let tdListName = document.createElement("td")
        let tdListDesc = document.createElement("td")
        let tdX = document.createElement("td")

        // tdListName.addEventListener("click", ListApi.renderList)
        // tdListDesc.addEventListener("click", ListApi.renderList)
        // tdX.addEventListener("click", List.handleDelete)
        
        tdListDesc.dataset.list_id = this.id
        tdListName.dataset.list_id = this.id
        tdX.dataset.list_id = this.id

        tdListName.innerHTML = this.name
        tdListDesc.innerHTML = this.desc
        tdX.innerHTML = "X"

        tdListName.onclick = ListApi.handleAnimeOverlay(this.id)
        tdListDesc.onclick = ListApi.handleAnimeOverlay(this.id)
        AnimeApi.fetchAnimes(this.id)
        tdX.className = "list-delete"
        tdListDesc.id = "row-desc-data"
        tdListName.id = "row-name-data"

        tdListName.cursor = "pointer"
        
        
        tr.appendChild(tdListName)
        tr.appendChild(tdListDesc)
        tr.appendChild(tdX)
        listTableBody().appendChild(tr)

    }
    
    static renderListTable() {
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
                    <tbody id="list-table-body">
                    </tbody>
                </table>
                <button onclick="showListsForm()" id="lists-form-button">Create new list</button>
            </div>
        </div>
        `
    }
    


}