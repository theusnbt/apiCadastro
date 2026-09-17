import express from "express";
//import route from "./index.route.js";

const app = express();

app.use(express.json());

//app.use("/api", route);

export default app;
