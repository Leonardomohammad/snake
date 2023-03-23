const express=require('express');

const app=express();
app.use(express.static('public'))
app.get('/',(req,res)=>{
    console.log(req.url);
res.sendFile(__dirname+'/views/main.html');
    

})
app.listen(3000,()=>{
    console.log('we are listening on port 3000')
});