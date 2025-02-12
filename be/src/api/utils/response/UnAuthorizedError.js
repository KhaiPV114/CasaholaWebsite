import { HttpStatusCode } from "axios";

export default class UnauthorizedError {
  constructor(message) {
    (this.status = HttpStatusCode.Unauthorized),
      (this.message = message || "Incorrect email or password");
  }
}
