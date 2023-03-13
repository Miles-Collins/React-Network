import { AppState } from "../AppState";
import { Profile } from "../models/Profile";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class ProfilesService {
  // TODO MAKE MODEL FOR PROFILE
  async getById(profileId) {
    const res = await api.get(`api/profiles/${profileId}`);
    logger.log("getById  res:", res.data);
    AppState.profile = new Profile(res.data);
  }

  async getPost(profileId) {
    const res = await api.get(`api/profiles/${profileId}/posts`);
    logger.log("getPost  res:", res.data);
    AppState.posts = res.data;
  }

  async profileQuery(query) {
    const res = await api.get(`api/profiles?query=${query}`);
    logger.log("profileQuery  res:", res.data);
  }
}

export const profilesService = new ProfilesService();
