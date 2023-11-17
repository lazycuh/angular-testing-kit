declare namespace jasmine {
  // eslint-disable-next-line no-unused-vars
  interface Matchers<T> {
    doesNotExist(selector?: string): void;
    exists(selector?: string): void;
  }
  interface CustomMatcherResult {
    error: Error | undefined;
  }
}
