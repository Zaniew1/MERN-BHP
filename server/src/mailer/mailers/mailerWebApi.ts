import nodemailer from "nodemailer";
import { MailtrapTransport } from "mailtrap";
import { MAILER_STATUS, MAILER_WEBAPI_TOKEN, MAILER_TEST_FROM, SENDGRID_API_KEY } from "../constants/env";
import sgMail from "@sendgrid/mail";
import { NodeMailerInterface, ExtendedMailType, BasicMailType } from "../types";

export default class WebApiMailer implements NodeMailerInterface {
  constructor() {}
  async send(options: ExtendedMailType) {
    if (MAILER_STATUS === "prod") {
      return this.sendProd(options);
    }
    // if (MAILER_STATUS === "dev") {
    //   this.createNewTransport()
    //     .sendMail({
    //       from: MAILER_TEST_FROM,
    //       to: options.email,
    //       subject: options.subject,
    //       text: options.message,
    //       category: "",
    //       sandbox: true,
    //     })
    //     .then(console.log, console.error);
    // }
  }
  private createNewTransport() {
    return nodemailer.createTransport(
      MailtrapTransport({
        token: MAILER_WEBAPI_TOKEN,
        testInboxId: 2352716,
      })
    );
  }
  public async sendWelcome(options: BasicMailType) {
    const extendedOptions = { ...options, template: "welcome", subject: "Welcome in my application" };
    await this.send(extendedOptions);
  }
  public async sendResetPassword(options: BasicMailType) {
    const extendedOptions = { ...options, template: "reset", subject: "It seems that you want to reset your password" };
    await this.send(extendedOptions);
  }
  private async sendProd(options: ExtendedMailType) {
    // const attachments = options.attachments
    //   ? options.attachments.map((attachment) => ({
    //       content: attachment.content || "",
    //       filename: attachment.filename || "",
    //       type: attachment.type || "",
    //       disposition: attachment.disposition || "attachment",
    //     }))
    //   : [];

    const sendOptions = {
      to: options.email,
      from: MAILER_TEST_FROM,
      // attachments: attachments.length ? attachments : undefined, // Only include if there are attachments
      subject: options.subject || "No Subject",
      text: options.message || "asd",
      html: options.html || "asd", // Handle HTML content
      category: "", // If you have a category, set it here
    };
    sgMail.setApiKey(SENDGRID_API_KEY);
    sgMail
      .send(sendOptions)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
