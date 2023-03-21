import { App } from "../App";
import { AppState } from "../AppState";
import { Post } from "../models/Post";
import { Profile } from "../models/Profile";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

const randomProfile = "abcdefghijklmnopqrstuvwxyz".split("");
const profileNumber = Math.round(Math.random() * randomProfile.length);

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
    console.log(randomProfile[profileNumber], "Random Letter");
    const res = await api.get(
      `api/profiles?query=${randomProfile[profileNumber]}`
    );
    logger.log("getAll  res:", res.data);
    AppState.allProfiles = res.data.map((profile) => new Profile(profile));
    logger.log("getAll  AppState.allProfiles:", AppState.allProfiles);
    AppState.allProfiles = AppState.allProfiles.filter(
      (p) => p.bio != undefined
    );
    AppState.allProfiles = AppState.allProfiles.filter((p) => p.bio != "");
    AppState.allProfiles.forEach((profile) => {
      // console.log(profile.bio);
    });
    logger.log("[FILTERED PROFILES]", AppState.allProfiles);
  }
}

export const profilesService = new ProfilesService();
