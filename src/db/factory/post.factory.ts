import { setSeederFactory } from 'typeorm-extension';
import { PostModel } from '../../posts/entities/posts.entity';

export default setSeederFactory(PostModel, (faker) => {
  const post = new PostModel();
  post.title = faker.lorem.sentence();
  post.text = faker.lorem.paragraphs(3);
  return post;
});
