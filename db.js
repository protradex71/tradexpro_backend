import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("strictQuery", false);

mongoose
  .connect(
    // "mongodb+srv://manishsinghbais34766:Xmv02441!@vertexfx.wgtommg.mongodb.net/",
      process.env.MONGO_URI, 
      console.log(process.env.MONGO_URI), 
   {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((data) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("err", err, err.message);
  });
