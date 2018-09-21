'use strict';

export const hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

export const todo = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Your request (todo/${event.pathParameters.id}) was completed: Stasis in darkness. // Then the substanceless blue // Pour of tor and distances.`,
      input: event,
    }),
  };
};
