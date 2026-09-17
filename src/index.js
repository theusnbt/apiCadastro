import  dotenv  from "dotenv";
import app from "./app.js";
import connectDB from "./src/db/db.js";

dotenv.config();

connectDB();

const PORT = 3939;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});