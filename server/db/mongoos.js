const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://admin:admin@cluster0-shard-00-00-dehmo.mongodb.net:27017,cluster0-shard-00-01-dehmo.mongodb.net:27017,cluster0-shard-00-02-dehmo.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

module.exports={mongoose};