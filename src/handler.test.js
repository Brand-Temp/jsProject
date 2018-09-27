import { hello } from './handler';

describe('The hello handler', () => {
  it('should return 200 and the event', async () => {
    const testEvent = {
      headers: {
        'User-Agent': 'Something test (Jest)',
      },
      body: 'This test should pass',
    };

    const response = await hello(testEvent);

    expect(response).toEqual({
      statusCode: 200,
      body: JSON.stringify({
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: testEvent,
      }),
    });
  });
});
