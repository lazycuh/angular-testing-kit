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
});
