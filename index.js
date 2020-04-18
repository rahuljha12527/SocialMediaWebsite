const express=require('express');

const app=express();

const port=8000;
//use express router
app.use('/',require('./routes'));

const car=require('./controllers/home_controller');


app.listen(port,function(err){
    if(err){
        // console.log('Error',err);
        console.log(`Error in runnig the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});