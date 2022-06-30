let inputElement = document.querySelector('input')

let tasks = document.querySelector('.tasks')
let enterCheck = document.querySelector('input')

// Add task with Enter key
enterCheck.onkeypress = function (e) {
    if (e.which == 13) {
        pushSomething()
    }
}

function pushSomething() {
    if (inputElement.value.length == 0) {
        alert('Please Enter A Task!')
    } else {
        const d = document.createElement('div')
        const l = document.createElement('label')
        const ip = document.createElement('input')
        const s = document.createElement('span')
        const b = document.createElement('button')
        const i = document.createElement('i')

        ip.type = 'checkbox'
        ip.className = 'checkbox'
        ip.checked = false
        s.className = 'taskValue'
        s.appendChild(document.createTextNode(inputElement.value))
        l.className = 'task'
        l.appendChild(ip)
        l.appendChild(s)
        i.className = 'far fa-trash-alt'
        b.className = 'delete'
        b.appendChild(i)
        d.className = 'taskBlock'
        d.appendChild(l)
        d.appendChild(b)

        tasks.appendChild(d)
        inputElement.value = ''
    }
    clickEvent()
}

function clickEvent() {
    let current_Tasks = document.querySelectorAll('label')
    let buttonElement = document.querySelectorAll('.checkbox')

    // Checkbox
    for (let i = 0; i < current_Tasks.length; i++) {
        current_Tasks[i].onclick = function () {
            current_Tasks[i].classList.toggle('checked')
            console.log(current_Tasks[i])
        }


        // Delete Task
        let current_tasks = document.querySelectorAll('.delete')
            current_tasks[i].onclick = function () {
                this.parentNode.remove()
            }
    }
}
