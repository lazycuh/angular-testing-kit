export interface AssertThatApi {
  doesNotExist(): void;

  exists(): void;

  hasInnerHtml(expected: string): void;

  hasTextContent(expected: string): void;

  hasTextContentMatching(expected: string | RegExp): void;
}
