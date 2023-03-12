import { AppState } from "../AppState";
import { Post } from "../models/Post";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class PostsService {
  // SECTION CRUD METHODS
  async get() {
    const res = await api.get("api/posts");
    logger.log("get  res:", res.data.posts);
    AppState.posts = res.data.posts.map((post) => new Post(post));
    logger.log("get  AppState.posts:", AppState.posts);
    AppState.nextPage = res.data.older;
    logger.log("get  AppState.nextPage:", AppState.nextPage);
    AppState.previousPage = res.data.newer;
    logger.log("get  AppState.previousPage:", AppState.previousPage);
  }

  async create(postData) {
    const res = await api.post("api/posts", postData);
    logger.log("create  res:", res.data);
    AppState.posts.unshift(new Post(res.data));
    logger.log("create  AppState.posts:", AppState.posts);
  }

  async edit(postId, postData) {
    const res = await api.put(`api/posts/${postId}`, postData);
    logger.log("edit  res:", res.data);
  }

  async delete(postId) {
    const res = await api.delete(`api/posts/${postId}`);
    logger.log("delete  res:", res.data);
    AppState.posts = AppState.posts.filter((post) => post.id != postId);
  }

  // LIKES \\

  // SEARCH \\

  async search(query) {
    const res = await api.get(`api/post?query=${query}`);
    logger.log("search  res:", res.data);
    AppState.posts = res.data.map((post) => new Post(post));
  }
}

export const postsService = new PostsService();
