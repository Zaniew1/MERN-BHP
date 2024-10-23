import { NodeMailerInterface, ExtendedMailType, BasicMailType } from "./types";
import SMTPMailer from "./mailers/mailerSMTP";
class Mailer implements NodeMailerInterface {
  private mailerClass: NodeMailerInterface;
  constructor(mailerClass: NodeMailerInterface) {
    this.mailerClass = mailerClass;
  }
  public async send(sendingOptions: ExtendedMailType) {
    this.mailerClass.send(sendingOptions);
  }
  async sendWelcome(options: BasicMailType) {
    this.mailerClass.sendWelcome(options);
  }
  async sendResetPassword(options: BasicMailType) {
    this.mailerClass.sendResetPassword(options);
  }
}

export const SmtpMailer = new Mailer(new SMTPMailer());
export const WebApiMailer = new Mailer(new SMTPMailer());
