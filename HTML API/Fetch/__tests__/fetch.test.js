const fetchApi=require("../fetch");

jest.mock('node-fetch', () => {
    const context = {
      then: jest.fn().mockImplementationOnce(() => {
        const blob = {};
        const response = { blob };
        return Promise.resolve(response);
      })
    };
    return jest.fn(() => context);
  });
  
  describe('node-fetch', () => {
    it('should be mock correctly', async () => {
      const actualValue = await fetchApi.fetchBlobImage();
      expect(actualValue).toBe(JSON.stringify({ blob: {} }));
    });
  });