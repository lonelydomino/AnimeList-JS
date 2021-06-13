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
    

   
    static handleAnimeOverlay = () => {
        // return function(){
            
            document.querySelector("#lists-window").style.visibility = "hidden"
            let list_id = parseInt(event.target.dataset.list_id)
            AnimeApi.createAnimeTable(List.findById(list_id).name)
            document.querySelector("aside").className = "open"
            // document.querySelector(".outer-close2").addEventListener("click", function(){
            //     document.querySelector("aside").className = "close"
            //     document.querySelector("aside").innerHTML = ""
            //     document.querySelector("#lists-window").style.visibility = "visible"
            // })
            Anime.renderListAnimes(list_id)
        // }
    }
  static currentListAnimes(id){
    let items = Anime.all.filter(element => element.list_id == id)
    return items
  }
}

