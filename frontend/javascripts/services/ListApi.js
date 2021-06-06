class ListApi {

    static fetchLists() {
        List.renderListTable()
        fetch("http://localhost:3000/lists")
        .then(resp => resp.json())
        .then(json => json.forEach(listObj => {
            let item = List.findOrCreateBy(listObj)
            item.render()
        }))
        .catch()
    }
    
}