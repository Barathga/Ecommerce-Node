const {MongoClient} =require("mongodb")
module.exports = {
    db:null,
    async connect(){
        try{
        const connection = await MongoClient.connect("mongodb+srv://Abcd:abcd@cluster0.v9bkm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        this.db=connection.db("Rooms")
        }
        catch(err){
            if(err){
                console.log("error");
            }
        }
    }
}