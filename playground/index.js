const express= require('express')
const app=express();
var myArr=[];
app.post('/add/:element',(req,res)=>{
    myArr.push(req.params.element)
    res.status(201).send("done "+req.params.element)
});

app.get('/get',(req,res)=>{
    res.send(myArr);
    res.end()
})

app.get('/pos',(req,res)=>{
    var tmp=[];
    if(req.query.from<req.query.end && myArr.length>req.query.end){

        for(var i=req.query.from;i<=req.query.end;i++){
            tmp.push(myArr[i])
        }
        res.status(200).send(JSON.stringify(tmp));
        res.end();
    }else{
        res.status(400).send("enter valid range")
    }
})

app.put('/arr/:pos/:node',(req,res)=>{
    myArr[req.params.pos]=req.params.node
    res.status(200).send(JSON.stringify(tmp));
})

app.delete('/arr/:pos',(req,res)=>{
    myArr.splice(req.params.pos, 1);
    res.status(200).send(JSON.stringify(myArr));
})

app.listen(3000,()=>{

})
