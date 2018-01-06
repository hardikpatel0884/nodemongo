/**
 * mysql connection and query's
 * this is demo for how to connect node express with mysql
 * created: 1/6/2018 2:00 PM
 * author Hardik Patel
 * */


/**
 * initialize/inject require object in to application
 * @param {express} express framework
 * @param {mysql} mysql package
 * @app node object to create end points
 * */
const express=require("express"),
    app=express(),
    mysql=require('mysql');

/**
 * connection with mysql server
 * @param {host} host name
 * @param {user} database user name
 * @param {password} database password
 * @param {database} database name
 * */
const connection= mysql.createConnection({
    host:'sql2.freemysqlhosting.net',
    user     : 'sql2214315',
    password : 'jI8!lV1%',
    database : 'sql2214315'
});
/**
 * opening connection with database
 * */
connection.connect((err)=> {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

/**
 * GET /usr
 * get all user in system
 * @param {req} Incoming REQUEST object
 * @param {res} RESPONSE object
 * @return user collection
 * */
app.get('/user',(req,res)=>{
    // query for selecting all user fom database
    connection.query('select * from user',(err,res,fiels)=>{
        if (err) {
            console.log('error ', err);
            return;
        }
        console.log('res: ', res)
        console.log('field: ', fiels)
    })
    res.send("bye");//sending response message
})

/**
 * POST /user/{name}
 * to add user name into database
 * @param {name} String user name
 * @param {req} Incoming REQUEST object
 * @param {res} RESPONSE object
 * @return {status} status code and message
 * */
app.post('/user/:name',(req,res)=>{
    var name=req.params.name; // get user name from url
    var status=400; // set up status code
    var msg="not found" //set up message
    // query for insert user name into use table
    connection.query('insert into user(name) values("'+name+'");',(err,res,fld)=>{

        if(err){
            console.log('error: ',err)
            status=400;
            msg="not found"
        }
        status=201;
        msg=res;
    })
    res.status(status).send(msg)
})
 /** start service on port */
app.listen(3000,()=>{console.log('3000')});
