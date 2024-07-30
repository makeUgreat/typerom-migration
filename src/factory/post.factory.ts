import { setSeederFactory } from 'typeorm-extension';
import { Post } from '../posts/entities/posts.entity';

export default setSeederFactory(Post, (faker) => {
  const post = new Post();
  post.title = faker.lorem.sentence();
  post.text = faker.lorem.paragraphs(3);
  return post;
});
