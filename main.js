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
        tasks.innerHTML += `
        <div class='taskBlock'>
            <label class="task">
                <input type="checkbox" class="checkbox">
                <span class="taskValue">${inputElement.value}</span>
            </label> 
            <button class="delete">
                <i class="far fa-trash-alt"></i>    
            </button>
        </div>
        `
        inputElement.value = ''
    }
    clickEvent()
}

function clickEvent() {
    let current_Tasks = document.querySelectorAll('label')
    let buttonElement = document.querySelectorAll('.checkbox')

    // Checkbox
    for (let i = 0; i < current_Tasks.length; i++) {
        current_Tasks[i].onmouseup = function () {
            current_Tasks[i].classList.toggle('checked')
            console.log(buttonElement[i].checked)
        }


        // Delete Task
        let current_tasks = document.querySelectorAll('.delete')
            current_tasks[i].onclick = function () {
                this.parentNode.remove()
            }
    }
}
