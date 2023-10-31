type Subscriber = () => {};

export class Server {
  readonly #subscribers = new Map<string, Subscriber[]>();

  expect(request: string, subscriber: Subscriber): void {
    const queue = this.#subscribers.get(request);
    if (queue) {
      queue.push(subscriber);
    } else {
      const newQueue = [subscriber];
      this.#subscribers.set(request, newQueue);
    }
  }

  handle(request: string): void {
    const queue = this.#subscribers.get(request);
    if (!queue) {
      return;
    }
    while (queue.length > 0) {
      const subscriber = queue.pop();
      if (subscriber) {
        subscriber();
      }
    }
  }
}
