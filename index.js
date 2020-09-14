const express = require("express")
const projectsRouter = require("./routers/projectsRouter")
const actionsRouter = require("./routers/actionsRouter")

const server = express()

server.use(express.json())

const port = 5000

server.use("/api/projects", projectsRouter)
server.use("/api/actions", actionsRouter)

server.get("/", (req, res) => {
    res.json({ message: "Hey!" });
  });

server.listen(port, () => console.log("Server online"))