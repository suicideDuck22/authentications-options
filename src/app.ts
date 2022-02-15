import express from "express";
import expressBasicAuth from "express-basic-auth";

import { router } from "./routes";

const PORT = process.env.PORT || 3000;
const app = express();

app.set("view-engine", "ejs");

app.use(expressBasicAuth({
    users: {
        "admin": "renasteste"
    }
}));

app.use(router);

app.listen(PORT, () =>{
    console.log(`Server running at port ${PORT}`);
});