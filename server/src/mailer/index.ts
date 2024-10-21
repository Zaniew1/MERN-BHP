import nodemailer from "nodemailer";
import { MAILER_PASSWORD, MAILER_USERNAME, MAILER_HOST, MAILER_PORT, MAILER_SERVICE, MAILER_STATUS, MAILER_FROM } from "./constants/env";
import pug from "pug";
import { htmlToText } from "html-to-text";
interface NodeMailerInterface {
  sendWelcome(user: User, url: string): Promise<void>;
  sendResetPassword(user: User, url: string): Promise<void>;
  sendNewsletter(): Promise<void>;
}
type User = {
  email: string;
  name: string;
};
export class NodeMailer implements NodeMailerInterface {
  private name: string;
  private email: string;
  private url: string;
  constructor(user: User, url: string) {
    this.name = user.name;
    this.email = user.email;
    this.url = url;
  }
  async send(template: string, subject: string) {
    const html = pug.renderFile(`./views/${template}.pug`, {
      name: this.name,
      url: this.url,
      subject,
    });
    const mailOptions = {
      from: `BHP Project <${MAILER_FROM}>`,
      to: this.email,
      subject,
      html: template,
      text: htmlToText(html),
    };
    await this.createNewTransport().sendMail(mailOptions);
  }
  private createNewTransport() {
    if (MAILER_STATUS === "prod") {
      return nodemailer.createTransport({
        service: MAILER_SERVICE,
        host: MAILER_HOST,
        port: Number(MAILER_PORT),
        secure: false,
        auth: {
          user: MAILER_USERNAME,
          pass: MAILER_PASSWORD,
        },
      });
    }
    return nodemailer.createTransport({
      service: MAILER_SERVICE,
      host: MAILER_HOST,
      port: Number(MAILER_PORT),
      secure: false,
      auth: {
        user: MAILER_USERNAME,
        pass: MAILER_PASSWORD,
      },
    });
  }
  async sendWelcome() {
    await this.send("WelcomeCard", "Welcome in my application");
  }
  async sendResetPassword() {
    await this.send("Reset Password", "Below is your reset password code:");
  }
  async sendNewsletter() {
    // await this.send(usermail, "WelcomeCard", "Welcome in my application");
  }
}
