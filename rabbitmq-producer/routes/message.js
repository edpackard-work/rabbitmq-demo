const express = require("express");
const router = express.Router();

const amqp = require("amqplib/callback_api");

const url = "amqp://localhost";
const queue = "my-queue";

let channel = null;

amqp.connect(url, (err, conn) => {
  if (!conn) {
    throw new Error(`AMQP connection not available on ${url}`);
  }
  conn.createChannel((err, ch) => {
    channel = ch;
  });
});

process.on("exit", (code) => {
  channel.close();
  console.log("Closing channel...");
});

router.post("/", (req, res) => {
  channel.assertQueue(queue, { durable: false });
  channel.sendToQueue(queue, new Buffer.from(req.body.message));
  res.render("index", { response: `Successfully sent: ${req.body.message}` });
});

module.exports = router;
