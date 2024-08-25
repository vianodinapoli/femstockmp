import mongoose from 'mongoose';


export const dbCoonection = async() => {
    try {
        await mongoose.connect('mongodb://localhost/viano-test');
        console.log('DB is on')
    } catch (error) {
        console.log(error)
    }
}