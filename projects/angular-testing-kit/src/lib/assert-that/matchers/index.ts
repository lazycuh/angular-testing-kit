import { doesNotExistMatcher } from './does-not-exist';
import { existsMatcher } from './exists';

export const matchers = {
  doesNotExist() {
    return doesNotExistMatcher;
  },
  exists() {
    return existsMatcher;
  }
};
