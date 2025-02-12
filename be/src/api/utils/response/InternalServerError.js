import { HttpStatusCode } from "axios";

class InternalServerError {
  constructor(message) {
    this.status = HttpStatusCode.InternalServerError;
    this.message = message || "Internal Server Error";
  }
}

export default InternalServerError;
