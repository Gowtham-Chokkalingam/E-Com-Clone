import express from "express";

import dotenv from "dotenv";

import { v4 as uuid} from "uuid";
import Connection from "./database/db.js";

import DefaultData from "./default.js";

import Router from "./routes/route.js";

import cors from "cors";

import bodyParser from "body-parser";

const app = express();

dotenv.config();

app.use(cors());

//> this will remove the extra space and some randomnumber in the url which is coming from clinet side
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Router);

const PORT = 8080;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
// DefaultData();


paytmParams["EMAIL"] = "masai@gmail.com";

paytmParams["MOBILE_NO"] = "1234567852";
