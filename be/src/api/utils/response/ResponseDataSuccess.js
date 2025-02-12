import { HttpStatusCode } from "axios";
class ResponseDataSuccess {
  constructor(data) {
    this.status = HttpStatusCode.Ok;
    this.data = data || [];
  }
}
export default ResponseDataSuccess;
