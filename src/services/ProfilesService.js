import { AppState } from "../AppState";
import { Post } from "../models/Post";
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
    AppState.posts = res.data.posts.map((post) => new Post(post));
  }

  async profileQuery(query) {
    const res = await api.get(`api/profiles?query=${query}`);
    logger.log("profileQuery  res:", res.data);
  }

  async getAll() {
    const res = await api.get("api/profiles?query=a");
    logger.log("getAll  res:", res.data);
    AppState.allProfiles = res.data.map((profile) => new Profile(profile));
    logger.log("getAll  AppState.allProfiles:", AppState.allProfiles);
    AppState.allProfiles.filter((profile) => profile.bio == undefined);
    logger.log("[FILTERED PROFILES]", AppState.allProfiles);
  }
}

export const profilesService = new ProfilesService();
