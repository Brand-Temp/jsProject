export const hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };
};

export const todo = async event => {
  const id = event.pathParameters.id;
  if (Number.isInteger(id)) {
    const mysql = require('mysql');
    const connection = mysql.createConnection({
      host: process.env.RDS_HOSTNAME,
      user: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      port: process.env.RDS_PORT,
    });
    connection.connect(function(err) {
      if (err) {
        return {
          statusCode: 500,
          body: JSON.stringify({
            message: `Your request (todo/${id}) could not be completed`,
          }),
        };
      }
      let item = '';
      connection.query(`SELECT content FROM todos WHERE id = ${id}`, function (error, result) {
        if (error) {
          return {
            statusCode: 500,
            body: JSON.stringify({
              message: `Your request (todo/${id}) could not be completed`,
            }),
          };
        }
        item = result;
        return 0;
      });
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: `Your request (todo/${id}) was completed :D`,
          content: item,
        }),
      };
    });
    connection.close();
  }
  return {
    statusCode: 400,
    body: JSON.stringify({
      message: `Your request (todo/${id}) was not able to be completed as the id was not a number.`,
    }),
  };
};
