import { TestBed } from '@angular/core/testing';

import { LoggedInGuard } from './logged-in.guard';
import { AuthService } from "../services/auth.service";
import { RouterTestingModule } from "@angular/router/testing";
import { FakeAuthService } from "../services/fake-auth.service";

describe('LoggedInGuard', () => {
  let guard: LoggedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthService,
          useValue: FakeAuthService
        }
      ],
      imports: [
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(LoggedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
