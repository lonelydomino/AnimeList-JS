class UserApi {
    static current_user_id = ""
    static password = ""
    static email = ""

    static fetchUsers() {
        UserApi.password = document.querySelector("#password").value
        UserApi.email = document.querySelector("#email").value
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(json => { json.forEach(element => {
            if (element.email === UserApi.email && element.password === UserApi.password){
                UserApi.current_user_id = element.id
                debugger
            } else {
                UserApi.password = ""
                UserApi.email = ""
                //Login failed
            }
        });  
        })
    }
    static authenticateUser(email, password) {

    }

    static findUser(usersCollection, email, password) {
        debugger
        usersCollection.forEach(u => {
            if(u.username === username && u.password === password){
                debugger
                    current_user_id = user.id
                
            }
            else {
                debugger
                
            }
        });
    }


}