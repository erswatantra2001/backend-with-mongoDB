import mongoose from "mongoose";
import {DB_NAME} from "../constants";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      `mongoDB connected !! host : ${connectionInstance.connection.host}`
    );
    app.listen(PORT, () => {
      console.log(`listening from the port : ${PORT}`);
    });
  } catch (error) {
    console.log("error", error);
    process.exit(1);
  }
};
