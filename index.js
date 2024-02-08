let form = document.forms.create
let cont = document.querySelector('.container')
let todos = []

form.onsubmit = (e) => {
    e.preventDefault();

    let fm = new FormData(form)

    let todo = {
        id: Math.random(),
        title: fm.get('task'),
        isDone: false,
        time: new Date().toLocaleTimeString('uz-UZ', { hour12: false })
    }

    if (todo.title.trim() === "") {
        alert('Error')
        return
    }

    todos.push(todo)
    reload(todos, cont)
}

reload(todos, cont)

function reload(arr, place) {
    place.innerHTML = ''

    for (let item of arr) {
        let todo = document.createElement('div')
        let top_div = document.createElement('div')
        let title = document.createElement('span')
        let remove_btn = document.createElement('button')
        let time = document.createElement('span')

        todo.classList.add('todo')
        top_div.classList.add('top')
        title.classList.add('title')
        title.innerHTML = item.title
        remove_btn.innerHTML = "x"
        time.innerHTML = item.time


        top_div.append(title, remove_btn)
        todo.append(top_div, time)
        place.append(todo)

        // functions
    

        
             remove_btn.onclick = () => {
            let isSure = confirm('вы уверены?')
            if (isSure) {
                let idx = arr.index0f(item)
                todos.splice(idx, 1)
                todo.remove()
              
            }
        
        }

    }}