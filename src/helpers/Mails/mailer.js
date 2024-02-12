
import {createTransport} from 'nodemailer'

export const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: "gmail",
  auth: {
    user: "disruptivesaas@gmail.com",
    pass: "ivaj uoyd lzhf ljjo",
  },
});
