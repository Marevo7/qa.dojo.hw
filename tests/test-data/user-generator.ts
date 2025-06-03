import { faker } from '@faker-js/faker';

export type UserData = {
  firstName: string;
  email: string;
  password: string;
  phoneNumber: string;
};

export function userData () {
    return {
        firstName : faker.person.firstName(),
        email: faker.internet.email(),
        password: 'qweasdzcx',
        phoneNumber: faker.phone.number()
    }
}