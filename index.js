const express = require('express'); 

const port = 8000;

const app = express();

const db = require('./config/db');

app.set('view engine','ejs');

app.use(express.urlencoded());

const path = require('path');

app.use("/public",express.static(path.join(__dirname,"public")))

app.use('/uploads',express.static(path.join(__dirname,'uploads')));

app.use('/',require('./routes/indexRoutes'));

// app.use('/',(req,res)=>{
//     return res.render('view');
// })
app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return  false;
    }
    console.log(`Server iS running in port${port}`);
})