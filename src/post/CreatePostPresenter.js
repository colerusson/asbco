import { User } from "../model/User";

export default class CreatePostPresenter {
  getLoggedInUser() {
    return new User(
      "@janey",
      "Jane",
      "Doe",
      "Welcome to my blog about life. Here, I share my thoughts, experiences, and insights on various aspects of life. From personal growth and relationships to mindfulness and self-discovery, join me on this journey of exploration and inspiration.",
      "https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png"
    );
  }

  async createPost(post) {
    console.log("POST: ", post);
  }
}
