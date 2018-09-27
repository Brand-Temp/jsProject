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
  if(Number.isInteger(event.pathParameters.id)) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Your request (todo/${event.pathParameters.id}) was completed :D`,
      }),
    };
  }
  return {
    statusCode: 400,
    body: JSON.stringify({
      message: `Your request (todo/${event.pathParameters.id}) was not able to be completed as the id was not a number.`,
    }),
  };
};
