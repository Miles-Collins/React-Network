export class Post {
  constructor(data = {}) {
    this.id = data.id;
    this.body = data.body;
    this.creator = data.creator;
    this.imgUrl = data.imgUrl;
    this.likeIds = data.likeIds;
    this.likes = data.likes;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}
