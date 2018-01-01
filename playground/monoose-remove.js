const {mongoose} =require('./../server/db/mongoos');
const {Todo} = require('./../server/models/todo');

// Todo.remove({}).then((result)=>{console.log(result)});
// Todo.findOneAndRemove({}).then((result)=>console.log(result));
Todo.findByIdAndRemove('5a49e822205ddf2713af2375').then((todo)=>{
    console.log(todo);
});