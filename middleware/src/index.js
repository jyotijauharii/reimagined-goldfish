const express =require("express");
// const npath =(path);
const npath = require('path')
const app = express();

app.use(express.static('../public'))
app.use('/static', express.static(npath.join(__dirname, 'public')))

app.listen(3000,(req,res)=>{
console.log("listing the port 3000")
});