/// <reference path="types.d.ts"/>

import { matchers } from './matchers';

export * from './assert-that';

beforeEach(() => {
  jasmine.addMatchers(matchers);
});
