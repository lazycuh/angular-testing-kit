import { extractTextContent } from './extract-text-content';

describe('extractTextContent()', () => {
  let mountPoint: HTMLElement;

  beforeEach(() => {
    mountPoint = document.createElement('div');
    document.body.appendChild(mountPoint);
  });

  afterEach(() => {
    document.body.removeChild(mountPoint);
  });

  it('Should return text content', () => {
    const testDomElement = document.createElement('div');
    testDomElement.classList.add('testing');
    testDomElement.innerHTML = '<span>Hello World</span>';
    mountPoint.appendChild(testDomElement);

    expect(extractTextContent('.testing')).toEqual('Hello World');
  });
});
