import { createTransport } from "nodemailer";

const transporter = createTransport({
  //@ts-ignore
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendEmail = async ({
  toEmail,
  subject,
  emailBody,
}: {
  toEmail: string;
  subject: string;
  emailBody: any;
}) => {
  const EmailOption = {
    from: "Rohit Kushwaha <rajdilkhush0987654321@gmail.com>", // sender address
    to: toEmail,
    subject: subject,
    html: emailBody,
  };

  try {
    await transporter.sendMail(EmailOption);
    console.log("Email sent successfully");
  } catch (error) {
    ("Email service failed silently. Make sure you have provided your MAILTRAP credentials in the .env file");
    console.log(error);
  }
};

export { sendEmail };
