const express = require('express');

const PostsRouter = require("./data/post-router.js");

const server = express();
server.use("/api/posts", PostsRouter);

module.exports = server;