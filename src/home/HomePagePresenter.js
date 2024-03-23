import HomeService from "../services/home-service";

export default class HomePagePresenter {
	constructor() {
		this.service = new HomeService();
		this.view = null;
	}

	async getPosts(username) {
		try {
			const posts = await this.service.getUserPosts("\"" + username + "\"");
			return posts;
		}
		catch(e) {
			console.log(e);
		}
	}

	async getUserInfo(username) {
		try {
			const user = await this.service.getUserInfo("\"" + username + "\"");
			console.log(user)
			return user[0];
		}
		catch (e) {
			console.log(e);
		}
	}
}