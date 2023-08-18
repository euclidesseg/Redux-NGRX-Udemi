import { TestBed } from '@angular/core/testing';

import { SnackBarNotificationService } from './snackbar-notification.service';

describe('SnackBarNotificationService', () => {
  let service: SnackBarNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackBarNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
