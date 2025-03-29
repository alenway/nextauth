import mongoose from "mongoose";

export async function connect() {
   try {
      mongoose.connect(process.env.MONGO_URI!);
      const connection = mongoose.connection;
      connection.on("connection", () => {
         console.log("Mongo db is connected successful!");
      });
      connection.on("error", (err) => {
         console.log("Connection error make sure Mongo db is running." + err);
         process.exit();
      });
   } catch (error) {
      console.log("Something goes wrong!");
      console.error(error);
   }
}
