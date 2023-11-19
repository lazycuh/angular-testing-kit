import { fireEvent } from './fire-event';

describe('fireEvent()', () => {
  let mountPoint: HTMLElement;

  beforeEach(() => {
    mountPoint = document.createElement('div');
    document.body.appendChild(mountPoint);
  });

  afterEach(() => {
    document.body.removeChild(mountPoint);
  });

  it('Should fire the provided event', () => {
    const testDomElement = document.createElement('div');
    testDomElement.classList.add('testing');
    testDomElement.innerHTML = '<span>Hello World</span>';

    const eventListenerSpy = jasmine.createSpy();
    testDomElement.addEventListener('pointerdown', eventListenerSpy, false);
    mountPoint.appendChild(testDomElement);

    fireEvent('.testing', 'pointerdown');

    expect(eventListenerSpy).toHaveBeenCalledTimes(1);
  });

  it('Should throw an error when the selector argument is not a string, Element, or DebugElement', () => {
    expect(() => fireEvent(null, 'keyup')).toThrow(
      new Error('The event target for the provided selector is not a string, Element, or DebugElement, it was null')
    );
  });
});
