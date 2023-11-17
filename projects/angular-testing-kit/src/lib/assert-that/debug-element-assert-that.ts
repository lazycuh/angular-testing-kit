import { DebugElement } from '@angular/core';

import { AssertThatApi } from './assert-that-api';

export class DebugElementAssertThat implements AssertThatApi {
  constructor(private readonly _debugElement: DebugElement) {}

  doesNotExist() {
    expect(this._debugElement).doesNotExist();
  }

  exists() {
    expect(this._debugElement).exists();
  }

  hasInnerHtml(expected: string) {
    expect(this._debugElement.nativeElement.innerHTML).toEqual(expected);
  }

  hasTextContent(expected: string) {
    expect(this._debugElement.nativeElement.textContent).toEqual(expected);
  }

  hasTextContentMatching(expected: string | RegExp) {
    expect(this._debugElement.nativeElement.textContent).toMatch(expected);
  }
}
