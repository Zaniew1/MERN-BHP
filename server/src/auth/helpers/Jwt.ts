import jwt from "jsonwebtoken";
import "dotenv/config";
import AppError from "../utils/appError";
interface JsonWebTokenClassType {
  signToken(id: number): string | AppError;
  validateAccess(): boolean;
}

class JsonWebTokenClass implements JsonWebTokenClassType {
  private secret;
  private expiresIn;
  constructor(secret: string, expiresIn: string) {
    this.secret = secret;
    this.expiresIn = expiresIn;
  }
  public signToken(id: number) {
    if (!this.secret) {
      return new AppError("There is no jwt secret", 400);
    }
    if (!this.expiresIn) {
      return new AppError("There is no expires in secret", 400);
    }
    return jwt.sign({ id }, this.secret, {
      expiresIn: this.expiresIn,
    });
  }
  public validateAccess() {
    return true;
  }
}
export const JWT = new JsonWebTokenClass(process.env.JWT_SECRET as string, process.env.JWT_EXPIRES_IN as string);
