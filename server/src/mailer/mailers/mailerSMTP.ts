import nodemailer from "nodemailer";
import { MAILER_PASSWORD, MAILER_USERNAME, MAILER_HOST, MAILER_PORT, MAILER_SERVICE, MAILER_STATUS, MAILER_FROM } from "../constants/env";
import pug from "pug";
import { htmlToText } from "html-to-text";
import { NodeMailerInterface, ExtendedMailType, BasicMailType } from "../types";

export default class SMTPMailer implements NodeMailerInterface {
  private from: string = `BHP Project <${MAILER_FROM}>`;
  constructor() {}
  public async send(sendingOptions: ExtendedMailType) {
    const mailOptions = {
      from: this.from,
      to: sendingOptions.email,
      subject: sendingOptions.subject,
      html: sendingOptions.template ?? this.renderTemplate(sendingOptions),
      text: sendingOptions.message ?? htmlToText(this.renderTemplate(sendingOptions)),
      attachments: sendingOptions.attachments,
    };
    await this.createNewTransport().sendMail(mailOptions);
  }
  private renderTemplate(sendingOptions: ExtendedMailType) {
    return pug.renderFile(`./views/${sendingOptions.template}.pug`, {
      name: sendingOptions.name,
      url: sendingOptions.url,
      subject: sendingOptions.subject,
    });
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
    //mailtrap
    return nodemailer.createTransport({
      service: "mailtrap",
      host: "sandbox.smtp.mailtrap.io",
      port: 587,
      secure: false,
      auth: {
        user: "0b8185f5d7e9b9",
        pass: "af2d335962654e",
      },
    });
  }
  public async sendWelcome(options: BasicMailType) {
    const extendedOptions = { ...options, template: "welcome", subject: "Welcome in my application" };
    await this.send(extendedOptions);
  }
  public async sendResetPassword(options: BasicMailType) {
    const extendedOptions = { ...options, template: "reset", subject: "It seems that you want to reset your password" };
    await this.send(extendedOptions);
  }
}
