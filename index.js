function markAsDone(todos) {
    return transform(0, todos, []);
}

function transform(index, todos, modifiedTodos){
    if(index < todos.length){
        transform[index] = `done - ${todos}`;
        return transform(index, todos);
        
    }else{
        return modifiedTodos
    }
}
