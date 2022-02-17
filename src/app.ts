import express from "express";

import { router } from "./routes";

const PORT = process.env.PORT || 3000;
const app = express();

app.set("view-engine", "ejs");

app.use(router);

app.listen(PORT, () =>{
    console.log(`Server running at port ${PORT}`);
});