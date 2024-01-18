const {MongoClient}  = require("mongodb");
                                                                                                                                
const init = (connectionString) => {
    return new MongoClient(connectionString);
};
    // return MongoClient.connect(connectionString, function(err, client){
    //     if (err) throw err;
    //     let db = client.db('summer-photos');
    // });


module.exports = { init };
