import PostService from "../services/post-service";

export default class DisplayPostPresenter {
  async getPost() {
    return new PostService().getPost();
  }
}
