import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import config from "../config.js";
import serviceRoutes from "./routes/serviceRouter.js";

const app = express();
const PORT = process.env.PORT || 5000;
let db;
app.locals.db = db;
//scammerpaybacktipline@gmail

app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use("/", serviceRoutes);
mongoose
  .connect(config.db.host, {
    useNewURLParser: true,
    useUnifiedTopology: true
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));

db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
