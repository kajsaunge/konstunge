import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });
  try {
    const responseEmail = await transporter.sendMail({
      from: email,
      to: "info@konstunge.se",
      subject: `Förfrågan av ${name} via konstunge.se`,
      message: message,
      html: `<p>Meddelande från: ${name}</p>
             <p>Med epost: ${email}</p>
             <p>Message: ${message}</p>`,
    });
    console.log("Message sent with MessageID:", responseEmail.messageId);
  } catch (error) {
    console.log("Nodemailer transporter error: ", error);
  }
  res.status(200).json({
    user: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });
};
