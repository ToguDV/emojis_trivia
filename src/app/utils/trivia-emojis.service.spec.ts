import { TestBed } from '@angular/core/testing';

import { TriviaEmojisService } from './trivia-emojis.service';

describe('TriviaEmojisService', () => {
  let service: TriviaEmojisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TriviaEmojisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
