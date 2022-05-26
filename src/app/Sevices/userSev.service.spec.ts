/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserSevService } from './userSev.service';

describe('Service: UserSev', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserSevService]
    });
  });

  it('should ...', inject([UserSevService], (service: UserSevService) => {
    expect(service).toBeTruthy();
  }));
});
