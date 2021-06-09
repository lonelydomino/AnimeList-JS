class AnimeApi {

    static addToList = (animeObj) => {
        return function(){
            ListApi.current_list_id = parseInt(event.target.value)
            const data = {
                name: animeObj["canonicalTitle"],
                desc: animeObj["description"],
                image: animeObj["posterImage"]["small"],
                api_id: event.target.dataset.animeApiId,
                // user_id: UserApi.current_user_id, 
                list_id: event.target.value,
            }
            //how to establish a relationship? with no ids available?
        fetch("http://localhost:3000/animes", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
         })
        .then(resp => resp.json())
        .then(json => {
            let obj = json
            obj.list_id = ListApi.current_list_id
            let anime = new Anime(obj)
            //show added to list flash message
        })
        // alert(`${event.target.value} selected, id is : ${event.target.dataset.animeApiId}`);
        // Anime.all << Anime.findOrCreateBy()
        //handle form??
    }
    }
}