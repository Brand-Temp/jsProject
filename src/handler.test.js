import { hello, todo } from './handler';

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

describe('The todo handler', () => {
  it('should return "Your request (todo/{id}) was completed :D"', async () => {
    const testEvent = {
      headers: {
        'User-Agent': 'Todo test (Jest)',
      },
      pathParameters: {
        id: 1,
      },
      body: 'This test should pass',
    };

    const response = await todo(testEvent);

    expect(response).toEqual({
      statusCode: 200,
      body: JSON.stringify({
        message: 'Your request (todo/1) was completed :D',
      }),
    });
  });
});
