import nodemailer from 'nodemailer'
import { MailAdapter, sendMailData } from "../mail-adpaters";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2e873279c196f2",
      pass: "fd7f468ec9d60c"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: sendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Cadu Azeredo <caduazeredo@gmail.com>',
            subject,
            html: body, 
         });

    }
}