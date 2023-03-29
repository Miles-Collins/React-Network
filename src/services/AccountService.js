import { App } from "../App";
import { AppState } from "../AppState";
import { Account } from "../models/Account.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop";
import { api } from "./AxiosService";

class AccountService {
  async getAccount() {
    try {
      if (AppState.account) {
        return AppState.account;
      }
      const res = await api.get("/account");
      AppState.account = new Account(res.data);
      logger.log("[ACCOUNT]", AppState.account);
      return AppState.account;
    } catch (err) {
      logger.error("HAVE YOU STARTED YOUR SERVER YET???");
      return null;
    }
  }

  async edit(body) {
    try {
      const res = await api.put("account", body);
      logger.log("edit  res:", res.data);
      AppState.account = new Account(res.data);
      logger.log("edit   AppState.account:", AppState.account);
    } catch (error) {
      logger.error("[ERROR]", error);
      Pop.error("[ERROR]", error.message);
    }
  }
}

export const accountService = new AccountService();
