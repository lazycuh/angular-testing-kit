import { DebugElement } from '@angular/core';

import { AssertThatApi } from './assert-that-api';

export class DebugElementAssertThat implements AssertThatApi {
  constructor(private readonly _debugElement: DebugElement | null | undefined) {}

  doesNotExist() {
    expect(this._debugElement).doesNotExist();
  }

  exists() {
    expect(this._debugElement).exists();
  }

  hasInnerHtml(expected: string) {
    this._throwIfDebugElementIsNullOrUndefined();

    expect((this._debugElement?.nativeElement as HTMLElement | undefined | null)?.innerHTML).toEqual(expected);
  }

  private _throwIfDebugElementIsNullOrUndefined() {
    if (this._debugElement === null) {
      throw new Error('Debug element is null');
    }

    if (this._debugElement === undefined) {
      throw new Error('Debug element is undefined');
    }
  }

  hasTextContent(expected: string) {
    this._throwIfDebugElementIsNullOrUndefined();

    expect((this._debugElement?.nativeElement as HTMLElement | undefined | null)?.textContent).toEqual(expected);
  }

  hasTextContentMatching(expected: string | RegExp) {
    this._throwIfDebugElementIsNullOrUndefined();

    expect((this._debugElement?.nativeElement as HTMLElement | undefined | null)?.textContent).toMatch(expected);
  }
}
