import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class PostsService {
  async get() {
    const res = await api.get("api/posts");
    logger.log("get  res:", res.data.posts);
    AppState.posts = res.data.posts;
    AppState.nextPage = res.data.older;
    logger.log("get  AppState.nextPage:", AppState.nextPage);
    AppState.previousPage = res.data.newer;
    logger.log("get  AppState.previousPage:", AppState.previousPage);
  }
}

export const postsService = new PostsService();
