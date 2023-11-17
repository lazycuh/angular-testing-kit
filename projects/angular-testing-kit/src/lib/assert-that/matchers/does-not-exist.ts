/* eslint-disable camelcase */
import { DebugElement } from '@angular/core';
import { html_beautify } from 'js-beautify';

export const doesNotExistMatcher = {
  compare(actual: Element | DebugElement | null, selector?: string) {
    const result: jasmine.CustomMatcherResult = {
      error: undefined,
      message: '',
      pass: actual === null
    };

    if (actual instanceof Element) {
      result.message = `Expected a DOM element for '${selector}' to not exist`;

      if (!result.pass) {
        const prettifiedHtml = html_beautify(actual.outerHTML, { end_with_newline: true, indent_size: 2 });

        result.error = new Error(
          `${result.message}, but it was present (it should have been ${'`null`'}). It was\n${prettifiedHtml}`
        );
      }
    } else {
      result.message = 'Expected debug element to not exist';

      if (!result.pass) {
        const prettifiedHtml = html_beautify(actual?.nativeElement.outerHTML, {
          end_with_newline: true,
          indent_size: 2
        });

        result.error = new Error(
          `${result.message}, but it was present (it should have been ${'`null`'}). It was\n${prettifiedHtml}`
        );
      }
    }

    return result;
  }
};
