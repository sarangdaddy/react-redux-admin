import { formatDateToLocalTimezone } from './formatDateToLocalTimezone';

describe('adjustDateToLocalTimezone', () => {
  it('Test UTC date to Local Time and String form', () => {
    const date = new Date('Sat Oct 28 2023 15:44:31 GMT+0000 (UTC)');
    const formatted = formatDateToLocalTimezone(date);
    expect(formatted).toEqual('2023-10-29');
  });
});
