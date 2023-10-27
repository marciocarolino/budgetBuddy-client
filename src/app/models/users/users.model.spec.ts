import { UsersModel } from './users.model';

describe('Users', () => {
  it('should create an instance', () => {
    expect(new UsersModel()).toBeTruthy();
  });
});
