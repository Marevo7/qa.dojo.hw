import { faker } from '@faker-js/faker';

export type createArticle = {
  title: string;
  about: string;
  body: string;
  tag: string;
};

export function createArticle () {
    return {
        title : faker.lorem.sentence(5),
        about: faker.lorem.sentence(7),
        body: faker.lorem.paragraphs(1),
        tag: 'aqaBhdnn'
    }
}
