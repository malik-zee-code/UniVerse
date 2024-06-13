import { connect } from "mongoose";
import config from "config";
const db = config.get("mongoURI");
//Set up default mongoose connection
const ConnectDb = async () => {
  try {
    await connect(db);

    console.log("Database Connected");
  } catch (error) {
    console.log("Error Connection to Database", error);
  }
};

export default ConnectDb;
