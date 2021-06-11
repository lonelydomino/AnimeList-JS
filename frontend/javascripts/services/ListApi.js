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
        
    }
    static currentUserLists() {
        let array = List.all.filter(element => {
            return element.user_id == UserApi.current_user_id
        })
        return array
    }
    

   
    static handleAnimeOverlay = (e, id) => {
        return function(e){
            let list_id = parseInt(e.target.dataset.list_id)
            AnimeApi.createAnimeTable(List.findById(list_id).name)
            document.querySelector("aside").className = "open"
            document.querySelector(".outer-close").addEventListener("click", function(){
                document.querySelector("aside").className = "close"
                document.querySelector("aside").innerHTML = ""
            })
            Anime.renderListAnimes(list_id)
        }
    }
  static currentListAnimes(id){
    let items = Anime.all.filter(element => element.list_id == id)
    return items
  }
}

