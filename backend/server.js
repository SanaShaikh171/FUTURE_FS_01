const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", (req, res) => {

  console.log("ROUTE HIT");

  console.log(req.body);

  const { name, email, message } = req.body;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  res.json({
    success: true,
    message: "Message received successfully!"
  });

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});