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
    static renderList = (id) => {
            return function(){
                
  
                // ListApi.currentListAnimes(id).forEach(anime => {
                //     anime.render()
                // });

            }
    }

   
    static handleAnimeOverlay = () => {
        return function(){
            AnimeApi.createAnimeTable()
            document.querySelector("aside").className = "open"
            document.querySelector(".outer-close").addEventListener("click", function(){
                document.querySelector("aside").className = "close"
                document.querySelector("aside").innerHTML = ""
            })
        }
    }
  static currentListAnimes(id){
    let items = Anime.all.filter(element => element.list_id == id)
    return items
  }
}