import { reloadApp } from "detox-expo-helpers";

describe('Example', () => {
  beforeEach(async () => {
    await device.disableSynchronization();

    await reloadApp();
  });

  it('should show App screen', async () => {
    await expect(element(by.id('app'))).toBeVisible();
  });
});
