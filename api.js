"use strict";

//Write a simple message is server and client side1️⃣
/*const http = require("http");
const server = http.createServer((request, response) => {
  // response.write("This is the response");
  response.end("This is the response 2");
});

server.listen(5000, () => console.log("server is running"));*/

//Fetch data from the server using GET method2️⃣
/*const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  const data = { name: "Snehaa S", id: 123 };
  const user = JSON.stringify(data);
  res.end(user);
});

server.listen(5000, () => console.log("server is running"));*/

//Receive data from the client using POST method3️⃣
/*const http = require("http");
// const cors = require("cors");
// const middleware = cors();
const server = http.createServer();

server.on("request", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  response.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  response.setHeader("Access-Control-Allow-Credentials", true);
  // middleware(request, response, () => {});
  let receivedData = "";
  if (request.method === "OPTIONS") {
    response.end();
  }

  if (request.method === "POST") {
    request.on("data", (chunk) => {
      receivedData += chunk;
    });
    request.on("end", () => {
      let data;
      receivedData = JSON.parse(receivedData);
      if (receivedData.name === "Snehaa S") {
        data = { id: 1 };
      } else {
        data = { id: 0 };
      }
      const user = JSON.stringify(data);
      response.end(user);
    });
  }
});

server.listen(5000, () => console.log("server is running"));*/

//Modify data in the server using PUT method4️⃣
/*const http = require("http");
const server = http.createServer();
const oldData = { name: "Snehaa", age: 21 };
server.on("request", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  let modifiedData = "";
  if (req.method === "OPTIONS") {
    res.end();
  }
  if (req.method === "PUT") {
    req.on("data", (chunk) => {
      modifiedData += chunk;
    });
    req.on("end", () => {
      oldData.name = modifiedData;
      const user = JSON.stringify(oldData);
      res.end(user);
    });
  }
});

server.listen(5000, () => console.log("Server is running"));*/

//Modify data in the server using PATCH method5️⃣
/*const http = require("http");
const server = http.createServer();
const oldData = { name: "Snehaa", age: 21 };
server.on("request", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  let modifiedData = "";
  if (req.method === "OPTIONS") {
    res.end();
  }
  if (req.method === "PATCH") {
    req.on("data", (chunk) => {
      modifiedData += chunk;
    });
    req.on("end", () => {
      oldData.name = modifiedData;
      const user = JSON.stringify(oldData);
      res.end(user);
    });
  }
});

server.listen(5000, () => console.log("Server is running"));*/

//Delete data in the server using DELETE method6️⃣
/*const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);

  let users = [
    { name: "Trisha S", age: 20 },
    { name: "Snehaa S", age: 22 },
  ];

  if (req.method === "OPTIONS") {
    res.end();
  } else if (req.method === "DELETE") {
    let deletedData = "";
    req.on("data", (chunk) => {
      deletedData += chunk;
    });
    req.on("end", () => {
      const userIndex = users.findIndex((user) => user.name === deletedData);
      if (userIndex === -1) {
        // res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ name: `${deletedData} not found` }));
      } else {
        users.splice(userIndex, 1);
        users = JSON.stringify(users);
        res.end(users);
      }
    });
  }
});

server.listen(5000, () => console.log("Server is running"));*/
