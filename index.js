const express = require("express");
const morgan=require("morgan");
const cors = require("cors");
const app = express()
const data=require("./data.json");

app.use(cors());
app.use(
    express.urlencoded({
        extended : true,
    })
);
app.use(express.json());
app.use(morgan('tiny'));

app.get("/get-user",(req,res)=>{
const userData = data 
return res.send({
    data : userData ,
    status : true,
});
});
app.get("./get-user-by-id/:id",(req,res)=>{
    let id=Number(req.params)
    let userfound=data.find(d=>d.id==id)
    return res.send({
        data: userfound,
        status:true,
 } );
});
// give user information
// app.get("/",(req,res) =>{
//     console.log(req.query);
//      return res.status(200).send({
//     text: "resoponse from GET request",
//     });
// });

//  app.post("/",(req,res) =>{
//     console.log(req.body);
//     return res.status(200).send({
//     text: "resoponse from POST request",
//     });
// });
//  //save new data to database

// app.delete("/:id",(req,res) => {
//     console.log("QUERY",req.query);
//     console.log("PARAMS",req.params);
//     console.log("BODY",req.body);
//     return res.status(200).send( {
//     text:"resoponse from DELETE request",
//     } );
// } );  //delete some data

// app.put("/") // update some data then use

app.listen(8000,() => {  
    console.log("server running  on 8000...");
});

