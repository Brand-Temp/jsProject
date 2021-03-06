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
  const id = event.pathParameters.id;
  if(Number.isInteger(id)) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Your request (todo/${id}) was completed :D`,
      }),
    };
  }
  return {
    statusCode: 400,
    body: JSON.stringify({
      message: `Your request (todo/${id}) was not able to be completed as the id was not a number.`,
    }),
  };
};
