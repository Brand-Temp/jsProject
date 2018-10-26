import { hello, todo, api_test } from './handler';

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

describe('The todo handler', () => {
  it('should return 400 if the id is not an integer.', async () => {
    const testEvent = {
      headers: {
        'User-Agent': 'Todo test (Jest)',
      },
      pathParameters: {
        id: 'abc',
      },
      body: 'This test should pass',
    };

    const response = await todo(testEvent);

    expect(response).toEqual({
      statusCode: 400,
      body: JSON.stringify({
        message: 'Your request (todo/abc) was not able to be completed as the id was not a number.',
      }),
    });
  });
});

describe('The api_test handler', () => {
  it('should return the "title" field of the 5th post.', async() => {
    const testEvent = {
      headers: {
        'User-Agent': 'Test using axios to request from an api',
      },
      body: 'This test should pass',
    };
    const response = await api_test(testEvent);
    expect(response).toEqual({
      statusCode: 200,
      body: JSON.stringify({
        message: 'Here is what the api responded:',
        data: 'nesciunt quas odio',
        input: testEvent,
      }),
    });
  });
});
