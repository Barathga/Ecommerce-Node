const booking=require("./Routers/router")
const mongo=require("./shared/connect")
const roomlist=require("./Routers/routerlist")
const express=require("express")
const app=express()
app.use(express.json())


mongo.connect();


//post room, get room details, 
app.use("/booking",booking)

//roomcounts is for list all the lists like userdetails,room list, bookedlist
app.use("/Roomcounts",roomlist)




app.get("/users", function(req,res,next){
    res.send("server starts");
})

const port = process.env.PORT || 3001;

app.listen(port , function()

{
console.log("Started")
});







// git remote add origin https://github.com/Barathga/Ecommerce-Node.git
// git branch -M main
// git push -u origin main
