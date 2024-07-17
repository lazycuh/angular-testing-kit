/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import { Component, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { assertThat } from './assert-that';
import { matchers } from './matchers';

describe('assertThat(htmlSelector)', () => {
  let mountPoint: HTMLElement;

  beforeEach(() => {
    jasmine.addMatchers(matchers);
    mountPoint = document.createElement('div');
    document.body.appendChild(mountPoint);
  });

  afterEach(() => {
    document.body.removeChild(mountPoint);
  });

  it('#doesNotExist() should pass', () => {
    assertThat('.test').doesNotExist();
  });

  it('#exists() should pass', () => {
    const testDomElement = document.createElement('div');
    testDomElement.classList.add('testing');
    mountPoint.appendChild(testDomElement);

    assertThat('.testing').exists();
  });

  it('#hasInnerHtml() should pass', () => {
    const testDomElement = document.createElement('div');
    testDomElement.classList.add('testing');
    testDomElement.innerHTML = '<span>Hello World</span>';
    mountPoint.appendChild(testDomElement);

    assertThat('.testing').hasInnerHtml('<span>Hello World</span>');
  });

  it('#hasTextContent() should pass', () => {
    const testDomElement = document.createElement('div');
    testDomElement.classList.add('testing');
    testDomElement.innerHTML = '<span>Hello World</span>';
    mountPoint.appendChild(testDomElement);

    assertThat('.testing').hasTextContent('Hello World');
  });

  it('#hasTextContentMatching() should pass', () => {
    const testDomElement = document.createElement('div');
    testDomElement.classList.add('testing');
    testDomElement.innerHTML = '<span>   Hello World   </span>';
    mountPoint.appendChild(testDomElement);

    assertThat('.testing').hasTextContentMatching('Hello World');
  });
});

describe('assertThat(debugElement)', () => {
  @Component({
    selector: 'bbb-test',
    standalone: true,
    template: '<span class="hello-world">Hello World</span>'
  })
  class TestComponent {}

  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [provideExperimentalZonelessChangeDetection()]
    }).compileComponents();
  });

  beforeEach(() => {
    jasmine.addMatchers(matchers);

    fixture = TestBed.createComponent(TestComponent);
    debugElement = fixture.debugElement;
  });

  it('#doesNotExist() should pass', () => {
    assertThat(debugElement.query(By.css('.testing'))).doesNotExist();
  });

  it('#exists() should pass', () => {
    assertThat(debugElement.query(By.css('.hello-world'))).exists();
  });

  it('#hasInnerHtml() should pass', () => {
    assertThat(debugElement).hasInnerHtml('<span class="hello-world">Hello World</span>');
  });

  it('#hasInnerHtml() should throw if debug element is null', () => {
    expect(() => {
      assertThat(null).hasInnerHtml('<span class="hello-world">Hello World</span>');
    }).toThrow(new Error('Debug element is null'));
  });

  it('#hasInnerHtml() should throw if debug element is undefined', () => {
    expect(() => {
      assertThat(undefined).hasInnerHtml('<span class="hello-world">Hello World</span>');
    }).toThrow(new Error('Debug element is undefined'));
  });

  it('#hasTextContent() should pass', () => {
    assertThat(debugElement.query(By.css('.hello-world'))).hasTextContent('Hello World');
  });

  it('#hasTextContent() should throw if debug element is null', () => {
    expect(() => {
      assertThat(null).hasTextContent('Hello World');
    }).toThrow(new Error('Debug element is null'));
  });

  it('#hasTextContent() should throw if debug element is undefined', () => {
    expect(() => {
      assertThat(undefined).hasTextContent('Hello World');
    }).toThrow(new Error('Debug element is undefined'));
  });

  it('#hasTextContentMatching() should pass', () => {
    assertThat(debugElement.query(By.css('.hello-world'))).hasTextContentMatching(' World');
  });

  it('#hasTextContentMatching() should throw if debug element is null', () => {
    expect(() => {
      assertThat(null).hasTextContentMatching('Hello World');
    }).toThrow(new Error('Debug element is null'));
  });

  it('#hasTextContentMatching() should throw if debug element is undefined', () => {
    expect(() => {
      assertThat(undefined).hasTextContentMatching('Hello World');
    }).toThrow(new Error('Debug element is undefined'));
  });
});
