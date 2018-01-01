// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const con=client.db("TodoApp");

    // con.collection('Todos').findOneAndUpdate({
    //     _id:new ObjectID('5a472f8b42401b29833218d1')
    // },{
    //     // set the value which want to update
    //     $set:{
    //         completed:false
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result)
    // });

    con.collection('Users').findOneAndUpdate({
        _id:new ObjectID('5a4723a65bee9c246813e0d5')
    },{
        // set the value which want to update
        $set:{
            name:"HP"
        },
        // increment age value by one
        $inc:{
         //age:1existing
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result)
    });

    client.close();
});