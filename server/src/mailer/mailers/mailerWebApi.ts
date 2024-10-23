import nodemailer from "nodemailer";
import { MailtrapTransport } from "mailtrap";
import fetch from "node-fetch";

import {
  MAILER_WEBAPI_TOKEN,
  MAILER_PASSWORD,
  MAILER_USERNAME,
  MAILER_HOST,
  MAILER_PORT,
  MAILER_SERVICE,
  MAILER_STATUS,
  MAILER_FROM,
  MAILER_COMPANY_NAME,
  MAILER_DOMAIN_NAME,
} from "../constants/env";
import { NodeMailerInterface, ExtendedMailType, BasicMailType } from "../types";

class WebApiMailer implements NodeMailerInterface {
  constructor() {}
  async send(options: ExtendedMailType) {
    if (MAILER_STATUS === "prod") {
      return this.sendProd(options);
    }
    this.createNewTransport()
      .sendMail({
        from: MAILER_FROM,
        to: options.email,
        subject: options.subject,
        text: options.message,
        category: "",
        sandbox: true,
      })
      .then(console.log, console.error);
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
    const url = "https://send.api.mailtrap.io/api/send";
    const sendOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Api-Token": "123",
      },
      body: `{"to":[{"email":"${options.email}","name":"${
        options.name
      }"}], "from":{"email":"${MAILER_FROM}","name":"${MAILER_COMPANY_NAME}"},"attachments":[{"content":"${
        options.attachments.content ?? ""
      }","filename":"${options.attachments.filename}","type":"${
        options.attachments.type
      }","disposition":"attachment"}],"headers":{"X-Message-Source":"${MAILER_DOMAIN_NAME}"},"subject":"${options.subject}","text":"${
        options.message
      }","category":"", "html":""}`,
    };

    try {
      const response = await fetch(url, sendOptions);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
}
