import { DebugElement } from '@angular/core';

import { AssertThatApi } from './assert-that-api';
import { DebugElementAssertThat } from './debug-element-assert-that';
import { SelectorAssertThat } from './selector-assert-that';

export function assertThat(selector: string | DebugElement): AssertThatApi {
  return typeof selector === 'string' ? new SelectorAssertThat(selector) : new DebugElementAssertThat(selector);
}
