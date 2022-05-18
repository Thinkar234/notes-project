require("dotenv").config();
const express = require("express");
const app = express();
const notesRouter = require("./routes/notes-route");
const connectDB = require("./db/connect");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", notesRouter);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (err) {
    console.log(err);
  }
};

start();
