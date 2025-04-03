import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "Deendayal-Port" // Specify the database name explicitly
        });

        console.log("Database Connected");

    } catch (error) {
        console.error("Database Connection Error:", error);
        process.exit(1); // Exit the process if connection fails
    }
};

export default connectDB;
