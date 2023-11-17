import { findElementBySelector } from './find-element-by-selector';

describe('findElementBySelector()', () => {
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

    expect(findElementBySelector('.testing')).not.toBeNull();
  });

  it('Should return null when nothing is found', () => {
    const testDomElement = document.createElement('div');
    testDomElement.classList.add('testing');
    testDomElement.innerHTML = '<span>Hello World</span>';
    mountPoint.appendChild(testDomElement);

    expect(findElementBySelector('.test')).toBeNull();
  });
});
