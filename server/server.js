const express=require('express');
const bodyParser=require('body-parser');
const {mongoose}=require('./db/mongoos.js');

const {Todo}=require('./models/todo.js');
const {User}=require('./models/user.js');

const app= express();

// use 3rd party for parse json from request body
app.use(bodyParser.json());

/**
 * add totod
 * url post server.js/todos
 */
app.post('/todos',(req,res)=>{
    var todo=new Todo({
        text:req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});

/**
 * get todo(s) detail
 */
app.get('/todos',(req,res)=>{
    var todo=new Todo();
});

app.listen(3000,()=>{

});
