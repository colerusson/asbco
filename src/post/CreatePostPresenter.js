import PostService from "../services/post-service";

export default class CreatePostPresenter {
  async getLoggedInUser() {
    return await new PostService().getCurrentUser();
  }

  async createPost(post) {
    return await new PostService().createPost(post);
  }
}
