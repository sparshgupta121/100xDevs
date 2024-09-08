require("dotenv").config();

const express = require("express");
const rootRouter = require("./routes/index");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.get("/", (req, res) => {
	res.send("hii");
});

app.listen(3000, () => {
	console.log("Server running on port 3000");
});
