const mongo = require('../shared/connect')

//Get a data from the data base
module.exports.product=async(req,res,next)=>{

    try {
        var data = await mongo.db.collection("Roomcounts").find().toArray();
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}

//seats check need to be configured
module.exports.seats=async(req,res,next)=>{
    res.send("Available seats check successful");
}


//insert a data as collection (POST)
module.exports.posting=async(req,res,next)=>{
    try {
        console.log("data updated");
        var data = await mongo.db.collection("Roomcounts").insert(req.body);
        res.send(data);
        next();
        
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}

//List of booked rooms

module.exports.getbookedRooms=async(req,res,next)=>{

    try {
        var data = await mongo.db.collection("Roomcounts").findAll({bookingId:1}).toArray();
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}
