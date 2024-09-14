import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import "dotenv/config";
class JsonWebToken {
  private secret;
  private expiresIn;
  constructor(secret: string, expiresIn: string) {
    this.secret = secret;
    this.expiresIn = expiresIn;
  }
  public signToken(id: string) {
    return jwt.sign({ id }, this.secret, {
      expiresIn: this.expiresIn,
    });
  }
}
const JWT = new JsonWebToken(process.env.JWT_SECRET as string, process.env.JWT_EXPIRES_IN as string);
console.log(JWT);
