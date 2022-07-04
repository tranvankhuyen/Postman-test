
let usersAPI = 'http://localhost:3000/users'
let commentsAPI = 'http://localhost:3000/comments'
let html = ''


Promise.all ([
    fetch(usersAPI).then(value => value.json()),
    fetch(commentsAPI).then(value => value.json())
])
    .then(value => {
        return {
            "users": value[0], 
            "comments": value[1]
        }
    })
    .then ((data) => {
        console.log(data)
        return data
    })

    .then ((data) => {
        console.log(data) 
        let userIds = data.comments.map(comment => comment.user_id)
            
            return getUserByIds(data.users, userIds)
                .then ((users) => {
                    return {
                        users: users,
                        comments: data.comments
                    }
                })
    })
    .then ((data) => {
        data.comments.forEach(comment => {
            let user = data.users.find((user) => { 
                return user.id == comment.user_id
            })
            html += `<li>${user.name}: ${comment.content}</li>`
        });
        let commentBlock = document.querySelector('.container')
        commentBlock.innerHTML = html
    }) 

  
function getUserByIds (users, userIds) {
    return new Promise ((resolve, reject) => {
        let result = users.filter((user) => {
            return userIds.includes(user.id)
        })
        resolve(result)
    })
} 