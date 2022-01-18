const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/techExpert').then(
    ()=>{
        console.log("Database Connection Successfull");
    }
    ).catch((error)=>{
        console.log(error);
    })



    // const connEstb = async()=>{
    //     mongoose.connect('mongodb://localhost:27017/techExpert');
    // }
    // try {
    //     await connEstb();
    //   } catch (error) {
    //     handleError(error);
    //     console.log(error);
    //   }