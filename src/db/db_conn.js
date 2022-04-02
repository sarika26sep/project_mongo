const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/first_mongoo_prj").then(()=>{
    console.log("========Success");
}).catch(err=>{
    console.log("======Error",err)
})