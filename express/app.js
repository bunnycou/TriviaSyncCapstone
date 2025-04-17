import express from 'express'
import * as ws from 'ws'
import path from 'path'
import { scoreSubmission } from "./score.js"
import * as sessions from "./sessions.js"
import * as database from "./database.js"
const app = express()
const port = 80
const wss = new ws.WebSocketServer({port:8080})
const __dirname = path.resolve()

app.use(express.json());

app.use(express.static("public"))

app.get("/questions", async (req, res) => {
  let questions = await database.getQuestions()
  let session = sessions.createSession(questions)
  res.send(session.questionsPublic)
})

app.get("/*", (req, res) => {
  res.sendFile(page("index.html"))
})

app.post("/submit", async (req, res) => {
  const {name, submissions, sessionId} = req.body

  let session = sessions.getSession(sessionId)
  let answers = session.getAnswers()
  let startTime = session.startTime
  let score = scoreSubmission(submissions, answers, startTime)

  let newname = await database.submitScore(name, score)

  let position = database.getPosition(name, score)
  let data = { score: score, position: position, answers: answers }

  console.log(`Session ${sessionId} got ${score}pts as ${newname}`)
  wssBroadcastScores()
  sessions.deleteSession(sessionId)

  res.send(data)
})

app.listen(port, async () => {
  try { await database.getConnection(); console.log("Database Online") }
  catch { console.log("Database Offline. Server will crash without Database.") }
  console.log(`TriviaSync listening at http://localhost:${port}`)
})

wss.on("connection", async function open(ws) {
  ws.send(JSON.stringify(await database.getScores()))
  console.log("New Client connected, sending Leaderboard Data")
})

async function wssBroadcastScores() {
  console.log("New score entered, broadcasting to clients.")
  let data = JSON.stringify(await database.getScores())
  wss.clients.forEach(client => {
    client.send(data)
  });
}

function page(name) {
  let retVal = __dirname + "/public/" + name
  if (retVal.endsWith(".html")) {
    return retVal
  } else {
    return retVal + ".html"
  }
}