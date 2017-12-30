const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo=mongoose.model('Todo',{
    text:{
        type:String
    },
    completed:{
        type:Boolean
    },
    completedAt:{
        type:Number
    }
});

var newTodo=new Todo({
    text:'Cook dinner'
});
newTodo.save().then((doc)=>{
    console.log('Save todo',doc)
},(e)=>{
    console.log('Unable to save todo');
});