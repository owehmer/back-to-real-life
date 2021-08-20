import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../services/auth.service';
import { FakeAuthService } from '../services/fake-auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

describe('LoginComponent', () => {
  async function _setup() {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        {
          provide: AuthService,
          useClass: FakeAuthService
        }
      ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: '',
            component: LoginComponent
          },
          {
            path: 'news',
            component: LoginComponent // To not import any more components into this test
          }
        ]),
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        FormsModule,
        NoopAnimationsModule
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;

    const router = TestBed.inject(Router);
    const location = TestBed.inject(Location);

    return {
      fixture,
      component,
      router,
      location
    };
  }

  it('should create', async () => {
    const { fixture, component } = await _setup();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show the register component when input is set', async () => {
    const { fixture, component } = await _setup();

    component.showRegister = true;
    fixture.detectChanges();
    const htmlElem = fixture.nativeElement as HTMLElement;
    let registerComp = htmlElem.querySelector('app-register');

    expect(registerComp).toBeTruthy();

    component.showRegister = false;
    fixture.detectChanges();

    registerComp = htmlElem.querySelector('app-register');
    expect(registerComp).toBeFalsy();
  });

  it('should show the register component when the register fn is used', async () => {
    const { fixture, component } = await _setup();

    component.registerClicked();
    fixture.detectChanges();

    const htmlElem = fixture.nativeElement as HTMLElement;
    const registerComp = htmlElem.querySelector('app-register');

    expect(registerComp).toBeTruthy();
  });

  it('should display errors when the fields are not filled but submit is pressed', async () => {
    const { fixture } = await _setup();

    fixture.detectChanges();
    const submitBtn = fixture.debugElement.query(By.css('button[testid=submit]')).nativeElement as HTMLButtonElement;
    const usernameField = fixture.debugElement.query(By.css('mat-form-field[testid=username-ff]')).nativeElement as HTMLElement;
    const passwordField = fixture.debugElement.query(By.css('mat-form-field[testid=password-ff]')).nativeElement as HTMLElement;

    submitBtn.click();
    fixture.detectChanges();

    expect(usernameField.classList.contains('mat-form-field-invalid')).toBeTruthy();
    expect(passwordField.classList.contains('mat-form-field-invalid')).toBeTruthy();
  });

  it('should stay on the same page when credentials are invalid', fakeAsync(async () => {
    const { fixture, router, location } = await _setup();
    router.initialNavigation();
    fixture.detectChanges();

    // Trigger the form submit event
    const submitBtn = fixture.debugElement.query(By.css('button[testid=submit]')).nativeElement as HTMLButtonElement;
    submitBtn.click();
    tick();

    expect(location.path()).toBe('/');
  }));

  it('should navigate to the news page when credentials are valid', fakeAsync(async () => {
    const { fixture, router, location, component } = await _setup();
    router.initialNavigation();
    fixture.detectChanges();

    component.form.patchValue({
      username: 'foo',
      password: 'bar'
    });

    // Trigger the form submit event
    const submitBtn = fixture.debugElement.query(By.css('button[testid=submit]')).nativeElement as HTMLButtonElement;
    submitBtn.click();
    tick();

    expect(location.path()).toBe('/news');
  }))
});
