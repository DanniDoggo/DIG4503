const MongoClient = require("mongodb").MongoClient;

const URL = "mongodb+srv://danielleobrien:EiThxbNjydpoNTD4@cluster0-tc9sb.mongodb.net/";

MongoClient.connect(URL, function(err, connection) {
     
    //throw means programs going to stop
    if (err) {
      throw err;
    }
 
    let database = connection.db("DIG4503-78");
    let collection = database.collection("Movies");
   
    collection.findOne({
        "score": 79
    }, {}, (err, result) =>{
        console.log(result);
    });

    connection.close();
 
});
