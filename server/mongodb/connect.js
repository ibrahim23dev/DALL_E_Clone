import mongoose from "mongoose";

const connectBD = () => {
    mongoose.set('strictQuery', true);

    // Define your MongoDB connection string
    const url = 'mongodb+srv://Task:image101@cluster0.u0bl180.mongodb.net/Image';

    mongoose.connect(url).then(() => console.log("Connected to MongoDB")).catch((err) => {
        console.error(err);
    });
};

export default connectBD;
