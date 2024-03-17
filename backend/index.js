import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './Routes/auth.js';
import userRoute from './Routes/user.js';
import doctorRoute from './Routes/doctor.js';
import reviewRoute from './Routes/review.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
// const MONGO_URI = process.env.MONGO_URI;
// const MONGO_URI = mongoose.connect("mongodb://localhost:27017/ram");


const corsOptions = {
    origin:true}


    app.get('/', (req, res) => {
        res.send('Hello World!')
    })


    // const UserSchema = new mongoose.Schema({
    //     name: String,
    //     age: Number,})
    // const UserModel =mongoose.model('users', UserSchema);

    // app.get('/get', (req, res) => {
    //     UserModel.find({}).then(function(users){
    //         res.json(users);
    //     }).catch (function(err){
    //         console.log(err);
    // })})


    //connect to mongodb
    mongoose.set("strictQuery", false);
    const connectDB = async () => {
        try {
            await mongoose.connect("mongodb+srv://sonu:q3pVUQduaWYBkJ3S@ram.e1bcaqt.mongodb.net/medimate", {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log('MongoDB connection SUCCESS');
        } catch (err) {
            console.error('MongoDB connection FAIL',err);
        }
    }

    //middleware

    app.use(express.json());
    app.use(cookieParser());
    app.use(cors(corsOptions));
    app.use('/api/v1/auth',authRoute);//domain/api/v1/auth/register
    app.use('/api/v1/users',userRoute);
    app.use('/api/v1/doctors',doctorRoute);
    app.use('/api/v1/reviews',reviewRoute);



    console.log(`PORT: ${PORT}`);
    app.listen(5000, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`)
});
