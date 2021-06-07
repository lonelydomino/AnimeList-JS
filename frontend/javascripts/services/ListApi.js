class ListApi {

    static fetchLists() {
        fetch("http://localhost:3000/lists")
        .then(resp => resp.json())
        .then(json => json.forEach(listObj => {
            List.all << List.findOrCreateBy(listObj)
        }))
        .catch(this.handleError)
    }
    static handleError(error) {
        
    }
    static currentUserLists() {
        let array = List.all.filter(element => {
            return element.user_id == UserApi.current_user_id
        })
        return array
    }
}