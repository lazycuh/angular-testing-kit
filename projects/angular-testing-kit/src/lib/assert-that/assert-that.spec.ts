import { Component } from '@angular/core';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
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
    template: '<span class="hello-world">Hello World</span>'
  })
  class TestComponent {}

  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    jasmine.addMatchers(matchers);

    fixture = TestBed.createComponent(TestComponent);
    debugElement = fixture.debugElement;
    fixture.detectChanges();
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

  it('#hasTextContent() should pass', () => {
    assertThat(debugElement.query(By.css('.hello-world'))).hasTextContent('Hello World');
  });

  it('#hasTextContentMatching() should pass', () => {
    assertThat(debugElement.query(By.css('.hello-world'))).hasTextContentMatching(' World');
  });
});
