import { HttpStatusCode } from "axios";

class BadRequestError {
  constructor(message) {
    this.status = HttpStatusCode.BadRequest;
    this.message = message || "Bad Request";
  }
}

export default BadRequestError;
