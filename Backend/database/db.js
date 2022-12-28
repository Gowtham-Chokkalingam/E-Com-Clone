import mongoose from "mongoose";
mongoose.set('strictQuery', false);

export const Connection = async (user,password) => {
   
  const URL = `mongodb+srv://${user}:${password}@ecommerceweb.sxe9k6w.mongodb.net/ECOMMERCE?retryWrites=true&w=majority`;
  try {
    // await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
    await mongoose.connect(URL);
    console.log(`Database Connected Succesfully`);
  } catch (error) {
    console.log("Error While Connetcing with Database", error.message);
  }
};

export default Connection;
