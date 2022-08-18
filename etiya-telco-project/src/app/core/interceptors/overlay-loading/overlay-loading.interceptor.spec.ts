import { TestBed } from '@angular/core/testing';
import { OverlayService } from '../../services/overlay-loading/overlay-loading.service';

import { OverlayLoadingInterceptor } from './overlay-loading.interceptor';

describe('OverlayLoadingInterceptor', () => {
  let service: OverlayService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        OverlayLoadingInterceptor,
        OverlayService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(OverlayLoadingInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('expects "intercept" to fire handleRequest', (done: DoneFn) => {
    const handler: any = {
      handle: () => {
        return of(true);
      }
    };
    const request: any = {
      urlWithParams: '/api',
      clone: () => {
        return {};
      }
    };
    spyOn(service.spinnerHandler, 'handleRequest').and.stub();

    service.intercept(request, handler).subscribe(response => {
      expect(response).toBeTruthy();
      expect(service.spinnerHandler.handleRequest).toHaveBeenCalled();
      done();
    });
  });

  it('expects "finalize" to fire handleRequest', () => {
    spyOn(service.spinnerHandler, 'handleRequest').and.stub();

    service.finalize();
    expect(service.spinnerHandler.handleRequest).toHaveBeenCalled();
  });

});