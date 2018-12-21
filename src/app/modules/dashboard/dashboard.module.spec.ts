import { DashboardModule } from './dashboard.module';

describe('DashboardModuleModule', () => {
  let dashboardModuleModule: DashboardModule;

  beforeEach(() => {
    dashboardModuleModule = new DashboardModule();
  });

  it('should create an instance', () => {
    expect(dashboardModuleModule).toBeTruthy();
  });
});
