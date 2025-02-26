import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbUri = process.env.MONGO_URI; // Ensure this is not undefined
    if (!dbUri) {
      throw new Error("MONGO_URI is not defined. Check your .env file.");
    }

    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
