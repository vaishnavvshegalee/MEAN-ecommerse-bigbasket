const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const appRouter = require("./routes/route");
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/Bigbasket", appRouter);

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("DB connection successfull");
  app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
  });
});
