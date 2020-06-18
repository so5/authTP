"use strict";
const express = require("express");
const app = express();
const port = 8080;

app.use((req, res, next)=>{
  /*eslint-disable-next-line no-console */
  console.log("req,res=", req, res);
  next();
});

app.get("/", (req, res)=>{
  return res.send("Hello World!");
});

app.listen(port, ()=>{
  /*eslint-disable-next-line no-console */
  return console.log(`Example app listening at http://localhost:${port}`);
});
