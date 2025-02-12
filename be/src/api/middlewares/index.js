// middlewares/index.js

import authenticateJWT from "./authenticateJWT.js";
import authorizeRoles from "./authorizeRoles.js";
import getTokenInfoFromRequest from "./getTokenInfoFromRequest .js";
import {
  handleBadRequest as handleBadRequest,
  handleNotFound as handleNotFound,
  handleServerErrors as handleServerErrors,
} from "./errorHandlers.js";
export {
  handleBadRequest,
  handleNotFound,
  handleServerErrors,
  authenticateJWT,
  authorizeRoles,
  getTokenInfoFromRequest,
};
