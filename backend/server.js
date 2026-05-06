const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,

  auth: {
    user: "shaikhsana7181@gmail.com",
    pass: "YOUR_APP_PASSWORD",
  },
});

app.post("/contact", async (req, res) => {

  const { name, email, message } = req.body;

  try {

    await transporter.sendMail({
      from: email,
      to: "shaikhsana7181@gmail.com",

      subject: "New Portfolio Contact Message",

      html: `
        <h2>New Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });

  }

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});