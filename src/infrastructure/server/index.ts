import express from "express";
import { init as dbInit, close as dbClose } from "../database";
import { init as containerInit } from "../container";
import { pigsController } from "./pigs.controller";

const app = express();

const init = async () => {
    await dbInit();
    await containerInit();

    app.get("/pigs-to-slaughter", pigsController);

    await app.listen(3000);
    console.log("Startruie started on port 3000");
};

init();

process.on("exit", async () => {
    await dbClose();
});
