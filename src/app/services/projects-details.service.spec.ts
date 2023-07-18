import { TestBed } from '@angular/core/testing';
import { ProjectDetailsService } from './projects-details.service';

describe('ProjectsDetailsService', () => {
  let service: ProjectDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
