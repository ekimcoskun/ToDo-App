// Get Saved Todos
const getSavedTodos = function(){
    const todoJSON = localStorage.getItem('todos')

if(todoJSON !== null){
    return JSON.parse(todoJSON)
}else{
    return []
}}

// Save Todos to localStorage
const saveTodo = function(todos){
    localStorage.setItem('todos',JSON.stringify(todos))
}

// Render todos
const renderTodos = function(task,filter){
    const filteredTodos = task.filter(function(todo){
        return todo.jobTitle.toLowerCase().includes(filter.search.toLowerCase())
    })
    document.querySelector('#area').innerHTML = ''

    filteredTodos.forEach(function(value){
        const ps = document.createElement('p')

        if(value.jobTitle.length > 0 ){
            ps.textContent = value.jobTitle
        }
        else{
            ps.textContent = 'Unnamed Job'
        }
        document.querySelector('#area').appendChild(ps)
    })
}

// Get the DOM elements for list summary
const generateSummaryDOM = function(todos){
    let counter = 0

    todos.forEach(function(value){
        if(!value.completed){
        counter++
        }
    })
    const left = document.createElement('h2')
    left.textContent = `You have ${counter} jobs todo.`
    document.querySelector('body').appendChild(left)
}

// Hide Completed Todos Function
const hideCompleted = function (tasks,hide){
    const hidedTodos = tasks.filter(function(todo){
        return todo.completed === hide.situation
    })

    document.querySelector('#area').innerHTML = ''
    if(!hideText.situation){
        hidedTodos.forEach(function(value){
        const ps = document.createElement('p')
        ps.textContent = value.jobTitle
        document.querySelector('#area').appendChild(ps)
    }) 
    }
    else{
        renderTodos(todos,searchText)
    }
}