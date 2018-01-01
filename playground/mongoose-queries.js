const {mongoose} =require('./../server/db/mongoos');
const {Todo} = require('./../server/models/todo');

var id='5a475722c2a86a32f4f30f64';
//Todo.find({_id:id}).then((todos)=>console.log('Todos',todos));

// find only one document
//Todo.findOne({_id:id}).then((todos)=>console.log('Todos',todos));

// default method for find document by id
Todo.findById(id).then((todos)=>{
    if(!todos){
        console.log('not found');
    }else{console.log(todos)}
},(e)=>console.log(e))