export class Account {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.picture = data.picture;
    this.coverImg = data.coverImg;
    this.class = data.class;
    this.github = data.github;
    this.linkedin = data.linkedin;
    this.resume = data.resume;
    this.graduated = data.graduated;
    this.bio = data.bio;
    // TODO add additional properties if needed
  }
}
