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
        return this.all.find(function(list) { list.name === name})
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
    static renderUserLists() {
        // List.all.forEach(element => {
        //     debugger
        //     element.render()
        // });
        //check users lsits and print
    }
    render() {
        let tr = document.createElement("tr")
        let tdListName = document.createElement("td")
        tdListName.innerHTML = this.name
        let tdListDesc = document.createElement("td")
        tdListDesc.innerHTML = this.desc
        let tdX = document.createElement("td")
        tdX.innerHTML = "X"
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