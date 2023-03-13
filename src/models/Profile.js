export class Profile {
  constructor(data = {}) {
    this.picture = data.picture;
    this.bio = data.bio;
    this.coverImg = data.coverImg;
    this.github = data.github;
    this.linkedin = data.linkedin;
    this.resume = data.resume;
    this.class = data.class;
    this.graduated = data.graduated;
    this.name = data.name;
    this.email = data.email;
  }
}
