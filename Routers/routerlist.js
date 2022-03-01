var express= require("express");
var router= express.Router();
var list=require("../Modules/List")



module.exports= router.get('/getList',list.allList)
module.exports=router.get('/getUsers',list.allUsers)
module.exports=router.get('/getBookedData',list.bookedUser)



// room/getList =>List  of the rooms
// room/getUsers =>List of all Users
// room/getBookedData =>List of booked rooms



//localhost:3005/Roomcounts/getUsers=> users details
//localhost:3005/Roomcounts/getBookedData =>Booked rooms details