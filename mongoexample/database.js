

const MongoClient = require("mongodb").MongoClient;

const URL = "mongodb+srv://danielleobrien:EiThxbNjydpoNTD4@cluster0-tc9sb.mongodb.net/";


class Database {
    constructor(){

        this.collection = null;
        this.connection = null;

        MongoClient.connect(URL, (err, connection) => {
     
            //throw means programs going to stop
            if (err) {
              throw err;
            }
         
            this.connection = connection;

            let database = connection.db("DIG4503-78");
            this.collection = database.collection("Movies");
           
            this.collection.findOne({
                "score": score
            }, {}, (err, result) => {
                console.log(result);
            });
        
            connection.close();
         
        });
    }
}

module.exports = Database;
