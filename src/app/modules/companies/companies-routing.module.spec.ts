import { CompaniesRoutingModule } from './companies-routing.module';

describe('CompaniesRoutingModule', () => {
  let companiesRoutingModule: CompaniesRoutingModule;

  beforeEach(() => {
    companiesRoutingModule = new CompaniesRoutingModule();
  });

  it('should create an instance', () => {
    expect(companiesRoutingModule).toBeTruthy();
  });
});
