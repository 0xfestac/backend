const express = require("express");
const app = express();

app.use(express.json());

app.post("/alchemy-webhook", (req, res) => {
  console.log("Webhook received:", req.body);

  // 🔥 You can forward this to Manus AI API here later

  res.sendStatus(200);
});

app.get("/", (req, res) => {
  res.send("Webhook server running 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));
