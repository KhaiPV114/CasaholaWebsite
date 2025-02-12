import { HttpStatusCode } from "axios";

class NotFoundError {
  constructor(message) {
    this.status = HttpStatusCode.NotFound;
    this.message = message || "Not Found Error";
  }
}

export default NotFoundError;
