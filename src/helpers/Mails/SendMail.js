import { transporter } from "./mailer.js";

export async function SendMail(html, subject, toEmail) {
  try {
    const info = await transporter.sendMail({
      from: "disruptivesaas@gmail.com", // sender address
      to: toEmail, // list of receivers
      subject, // Subject line
      html, // html body
    });
    console.log(info);
  } catch (error) {
    console.log(error);
  }
}
