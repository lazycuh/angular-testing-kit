# angular-testing-kit

A set of convenient utilities to make Angular testing with Jasmine and Karma simpler.

## Installation

- `npm`
  ```
  npm i -S @babybeet/angular-testing-kit
  ```
- `pnpm`
  ```
  pnpm i -S @babybeet/angular-testing-kit
  ```
- `yarn`
  ```
  yarn add @babybeet/angular-testing-kit
  ```

## `assertThat()`

This assertion function accepts either a string or a [`DebugElement`](https://angular.io/api/core/DebugElement), it returns an assertion object that can be used to check for different conditions.

- `#doesNotExist()`

  - Will pass if no element with the provided class name exists in `document.body`.
  - Example:
    ```ts
    assertThat('.hello-world').doesNotExist();
    ```

- `#exists()`

  - Will pass if an element with the provided class name exists in `document.body`.
  - Example:
    ```ts
    assertThat('.hello-world').exists();
    ```

- `#hasInnerHtml()`

  - Will pass if an element with the provided class name has the provided inner HTML string.
  - Example:
    ```ts
    assertThat('.hello-world').hasInnerHtml('<span>Hello World</span>');
    ```

- `#hasTextContent()`

  - Will pass if an element with the provided class name has the provided string as its text content.
  - Example:
    ```ts
    assertThat('.hello-world').hasTextContent('Hello World');
    ```

- `#hasTextContentMatching()`

  - Will pass if an element with the provided class name whose text content matches the provided value. This function also accepts a [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) to perform custom matching.
  - Example:
    ```ts
    assertThat('.hello-world').hasTextContentMatching(/hello\s+world/i);
    ```

## `delayBy()`

Returns a promise that will resolve after the provided milliseconds. Useful for when you need to wait for some asynchronous process to complete before proceeding.

```ts
await delayBy(500);
```

## `extractTextContent()`

Returns the text content of the element matched by the provided selector. It will throw an error if the matched element
is a `document` or `doctype` node because these nodes' `textContent` will be `null`. If no element is matched, then an error will be thrown.

```ts
expect(extractTextContent('.hello-world')).toEqual('Hello World');
```

## `findElementBySelector()`

Returns the element matched by the provided selector. If nothing is matched, `null` is returned.

```ts
expect(findElementBySelector('.hello-world')).not.toBeNull();
```

## `fireEvent()`

Dispatches the provided DOM event on the target element matched by the provided selector.
If no element is found for the selector, then an error will be thrown.

```ts
fireEvent('.hello-world', 'pointerup');
```

## `getElementBySelector()`

Returns the element matched by the provided selector. If nothing is matched, an error is thrown.

```ts
expect(() => getElementBySelector('.hello-world')).not.toThrow();
```
