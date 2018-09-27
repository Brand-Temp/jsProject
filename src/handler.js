export const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };
};

export const todo = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Your request (todo/${event.pathParameters.id}) was completed :D`,
    }),
  };
};
