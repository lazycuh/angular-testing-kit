/// <reference path="types.d.ts"/>

import { extractTextContent } from '../extract-text-content';
import { findElementBySelector } from '../find-element-by-selector';
import { getElementBySelector } from '../get-element-by-selector';

import { AssertThatApi } from './assert-that-api';

export class SelectorAssertThat implements AssertThatApi {
  constructor(private readonly _selector: string) {}

  doesNotExist() {
    expect(findElementBySelector(this._selector)).doesNotExist(this._selector);
  }

  exists() {
    expect(findElementBySelector(this._selector)).exists(this._selector);
  }

  hasInnerHtml(expected: string) {
    expect(getElementBySelector(this._selector).innerHTML).toEqual(expected);
  }

  hasTextContent(expected: string) {
    expect(extractTextContent(this._selector)).toEqual(expected);
  }

  hasTextContentMatching(expected: string | RegExp) {
    expect(extractTextContent(this._selector)).toMatch(expected);
  }
}
