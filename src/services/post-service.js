import { Post } from "../model/Post";
import { User } from "../model/User";

export default class PostService {
  async getPost() {
    return new Post(
      "Embracing the Language of Flowers: A Journey of Fragrance and Meaning",
      "Hey there, flower lovers! 🌸 Welcome back to my little corner of floral fascination. Today, I want to dive deep into the enchanting world of the language of flowers. From the dawn of time, flowers have spoken to us in a language beyond words, whispering secrets of love, friendship, and so much more. As we meander through fields of petals and hues, we can't help but be captivated by the stories they tell. Each bloom carries its own unique message, a silent yet profound communication with those who take the time to listen. \nLet's start with the classic symbol of love: the rose. Ah, the rose, with its velvety petals and intoxicating scent. Red roses have long been synonymous with passion and romance, but did you know that each color carries its own significance? Yellow roses symbolize friendship and joy, while pink roses express gratitude and admiration. Next time you give someone a bouquet, consider the hidden message within each bloom.\nMoving on to the delicate beauty of the lily. With its elegant silhouette and pure white petals, the lily is often associated with innocence and purity. It's no wonder they're a popular choice for weddings and other celebrations of new beginnings.\nAnd let's not forget about the humble daisy. Simple yet charming, the daisy symbolizes innocence and loyalty. Its cheerful demeanor reminds us to embrace the beauty in life's little moments, no matter how fleeting they may be.\nBut the language of flowers extends far beyond these familiar favorites. From the fiery passion of the sunflower to the delicate grace of the orchid, each bloom has its own tale to tell. And as we cultivate our own gardens of understanding, we become fluent in the silent symphony of petals and leaves.\nSo, dear readers, as you go about your day, take a moment to pause and smell the roses (or the lilies, or the daisies... you get the idea). Let the fragrance and beauty of flowers remind you of the beauty that surrounds us, and the messages that nature whispers to those who are willing to listen.\nWildflowers come in all shapes and sizes, from the delicate petals of the forget-me-not to the fiery brilliance of the Indian paintbrush. They serve as vital sources of nectar for pollinators such as bees, butterflies, and hummingbirds, playing a crucial role in maintaining biodiversity and ecosystem health.\nOne of the most magical aspects of wildflowers is their ability to bloom in abundance, transforming landscapes into breathtaking tapestries of color. Whether it's a carpet of bluebonnets in Texas or a sea of poppies in California, wildflower blooms have the power to captivate our imaginations and inspire wonder.\nBut beyond their aesthetic appeal, wildflowers also hold profound cultural and symbolic significance. Throughout history, they have been celebrated in art, literature, and folklore as symbols of freedom, beauty, and renewal. From ancient myths to modern-day celebrations, wildflowers continue to capture our collective imagination and remind us of the timeless beauty of the natural world.\nSo the next time you find yourself surrounded by wildflowers, take a moment to pause and appreciate their beauty. Let their vibrant colors and delicate fragrances transport you to a world of wonder and awe. And remember, no matter where life takes you, wildflowers will always be there to brighten your journey with their timeless beauty.\nUntil next time, keep blooming, my friends! 🌼",
      new User(
        "@janey",
        "Jane",
        "Doe",
        "Welcome to my blog about life. Here, I share my thoughts, experiences, and insights on various aspects of life. From personal growth and relationships to mindfulness and self-discovery, join me on this journey of exploration and inspiration.",
        "https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png"
      ),
      "3/18/2024 10:15 PM"
    );
  }

  async getCurrentUser() {
    return new User(
      "@janey",
      "Jane",
      "Doe",
      "Welcome to my blog about life. Here, I share my thoughts, experiences, and insights on various aspects of life. From personal growth and relationships to mindfulness and self-discovery, join me on this journey of exploration and inspiration.",
      "https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png"
    );
  }

  async createPost(post) {
    console.log("POST TO POST:", post);
  }
}
