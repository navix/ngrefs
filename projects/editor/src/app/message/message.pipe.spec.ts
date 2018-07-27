import { MessagePipe } from './message.pipe';

describe('MessagePipe', () => {
  it('create an instance', () => {
    const pipe = new MessagePipe();
    expect(pipe).toBeTruthy();
  });
});
