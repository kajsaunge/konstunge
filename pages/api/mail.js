import nodemailer from 'nodemailer';

export default async (req, res) => {
  const { name, email, message, path } = req.body;
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
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
      to: 'hej@kajsaunge',
      subject: `${name} via konst.kajsaunge.se`,
      message: message,
      path: path,
      html: `<p>Från: ${name} med epost: ${email}</p>
             <p>Meddelande: ${message}</p>
             <p>Tavla: ${path}</p>`,
    });
    console.log('Message sent with MessageID:', responseEmail.messageId);
  } catch (error) {
    console.log('Nodemailer transporter error: ', error);
  }
  res.status(200).json({
    user: req.body.name,
    email: req.body.email,
    message: req.body.message,
    path: req.body.path,
  });
};
