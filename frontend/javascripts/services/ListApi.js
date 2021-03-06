class ListApi {
    static current_list_id = ""

    static fetchLists() {
        fetch("http://localhost:3000/lists")
        .then(resp => resp.json())
        .then(json => json.forEach(listObj => {
            List.all << List.findOrCreateBy(listObj)
        }))
        .catch(this.handleError)
    }
    static handleError(error) {
        flash().innerText = error
        flash().classList.remove("hide")
        flash().classList.add("flash-error")
        setTimeout(() => {
            flash().innerText = ""
            flash().classList.remove("flash-error")
            flash().classList.add("hide")
        }, 3000)
    }
    static currentUserLists() {
        let array = List.all.filter(element => {
            return element.user_id == UserApi.current_user_id
        })
        return array
    }
    static handleAnimeOverlay = () => {
            let list_id = parseInt(event.target.dataset.list_id)
            AnimeApi.createAnimeTable(List.findById(list_id).name)
            document.querySelector("aside").className = "open"
            Anime.renderListAnimes(list_id)
    }
  static currentListAnimes(id){
    let items = Anime.all.filter(element => element.list_id == id)
    return items
  }
  static handleDelete = (e) => {
    fetch(`http://localhost:3000/lists/${e.target.dataset.list_id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": 'application/json'
        }
    })
    .then(resp => {
        e.target.parentElement.remove()
        let list = List.findById(parseInt(e.target.dataset.list_id))
        let index = List.all.indexOf(list)
        List.all.splice(index, 1)
        if(List.all.length === 0 && !addLists()){
            List.addNewListsButton()
        }
        this.fetchLists()
    }
    )
}
}

