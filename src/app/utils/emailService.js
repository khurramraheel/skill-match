import nodemailer from "nodemailer";

export async function sendResetEmail(email, resetLink) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "hamzashahbaz9121@gmail.com",
      pass: 'wvbxuimifyltpkis',
    },
  });

  await transporter.sendMail({
    from: "hamzashahbaz9121@gmail.com",
    to: email,
    subject: "Password Reset Request",
    text: `Click the link to reset your password: ${resetLink}`,
  });
}
