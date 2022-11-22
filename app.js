const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Setup Cross Origin
app.use(require("cors")());

//Bring in the routes
app.use("/user", require("./routes/user.js"));
app.use("/chatroom", require("./routes/chatroom.js"));

//Setup Error Handlers
const errorHandlers = require("./handlers/errorHandlers");
// app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);

// if (process.env.ENV === "production") {
//   app.use(errorHandlers.developmentErrors);
// } else {
//   app.use(errorHandlers.productionErrors);
// }

// if(process.env.ENV==="production"){
//   app.use(express.static('client/build'));
//   app.get('*',(req,res)=>{
//       res.sendFile(path.resolve(__dirname,'client','build','index.html'))
//   })
// }

module.exports = app;
