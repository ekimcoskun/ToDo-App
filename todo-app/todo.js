let todos = getSavedTodos()

const searchText = {
    search:''
}

const hideText = {
    situation: false
}

hideCompleted(todos,hideText)

renderTodos(todos,searchText)

generateSummaryDOM(todos)

document.querySelector('#filter-todo').addEventListener('input', function(e){
    searchText.search = e.target.value
    renderTodos(todos,searchText)
})

document.querySelector('#form').addEventListener('submit',function(e){
    e.preventDefault()
    const name = e.target.elements.inputTodo.value
    todos.push({jobTitle:name ,completed: false})
    saveTodo(todos)
    console.log('New Todo Added')
    renderTodos(todos,searchText)
    e.target.elements.inputTodo.value = ''
})

document.querySelector('#check-hide').addEventListener('change', function(e){
    hideText.situation = !e.target.checked
    hideCompleted(todos,hideText)
})
