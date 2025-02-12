
import Account from "../models/account.js";

const findUserByEmail = async (email) => {
  try {
    const account = Account.findOne({ email: email });

    return await account;
  } catch (error) {
    throw new Error("Failed to find user by email: " + error.message);
  }
};

const register = async (data) => {
  try {
    const { email, password, role, type } = data;
    const account = await Account.create(email, password, role ? role : "USER", type ? type : "NORMAL");
    return await account.save();
  } catch (error) {
    return ({
      status: error.status,
      message: error.message
    })
  }
};

const getByAccountId = async (accountId) => {
  return await Account.findOne({ $where: { _id: accountId } });
}

const updateTokenByAccountId = async (accountId, token) => {
  const account = await getByAccountId(accountId);
  account.refreshToken = token;
}


export default { findUserByEmail, register, updateTokenByAccountId, getByAccountId };
