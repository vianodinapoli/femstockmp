const MONGO_URI = "mongodb+srv://admin:admin@mpfem.y5pb022.mongodb.net/?retryWrites=true&w=majority&appName=mpfem"

import mongoose from 'mongoose';
const connectMongo = async()=>{
    try{

      const{connection} = await mongoose.connect(MONGO_URI)
      if(connection.readyState == 1 ){
        console.log("Database online")
      }

    }catch(errors){
        return Promise.reject(errors)
    }
}

export default connectMongo;