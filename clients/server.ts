import next from "next";
import express from "express";
import "reflect-metadata";
import routes from "./routes";

const app = next({dev: process.env.NODE_ENV !== "production"});
const server = express();
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
    server.get("*", (req, res) => handler(req, res));
    server.listen(3000);
});
