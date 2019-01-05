import {InternshipDetailsModule} from './internship-details.module';

describe('InternshipDetailsModule', () => {
  let internshipDetailsModule: InternshipDetailsModule;

  beforeEach(() => {
    internshipDetailsModule = new InternshipDetailsModule();
  });

  it('should create an instance', () => {
    expect(internshipDetailsModule).toBeTruthy();
  });
});
