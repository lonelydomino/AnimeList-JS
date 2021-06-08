class AnimeApi {

    static addToList = (animeObj) => {
        return function(){
        const data = {
            name: animeObj["canonicalTitle"],
            desc: animeObj["description"],
            image: animeObj["posterImage"]["small"],
            // list_id: event.target.value,
            api_id: event.target.dataset.animeApiId,
            // user_id: UserApi.current_user_id 
        }

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
            obj.user_id = UserApi.current_user_id

            let anime = new Anime(json)
            debugger
        })
        // alert(`${event.target.value} selected, id is : ${event.target.dataset.animeApiId}`);
        // Anime.all << Anime.findOrCreateBy()
        //handle form??
    }
    }
}