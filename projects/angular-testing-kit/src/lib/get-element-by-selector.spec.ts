/* eslint-disable @typescript-eslint/quotes */
import { getElementBySelector } from './get-element-by-selector';

describe('getElementBySelector()', () => {
  let mountPoint: HTMLElement;

  beforeEach(() => {
    mountPoint = document.createElement('div');
    document.body.appendChild(mountPoint);
  });

  afterEach(() => {
    document.body.removeChild(mountPoint);
  });

  it('Should return matched DOM element', () => {
    const testDomElement = document.createElement('div');
    testDomElement.classList.add('testing');
    testDomElement.innerHTML = '<span>Hello World</span>';
    mountPoint.appendChild(testDomElement);

    expect(getElementBySelector('.testing')).not.toBeNull();
  });

  it('Should throw an error when nothing is found', () => {
    const testDomElement = document.createElement('div');
    testDomElement.classList.add('testing');
    testDomElement.innerHTML = '<span>Hello World</span>';
    mountPoint.appendChild(testDomElement);

    expect(() => getElementBySelector('.test')).toThrow(new Error(`No element with select '.test' was found`));
  });
});
