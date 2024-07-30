import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Post } from '../posts/entities/posts.entity';
import { faker } from '@faker-js/faker';

export default class PostSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const repository = dataSource.getRepository(Post);
    const posts = Array.from({ length: 500 }).map(() =>
      repository.create({
        title: faker.lorem.sentence(),
        text: faker.lorem.paragraphs(3),
      }),
    );
    await repository.save(posts);
  }
}
