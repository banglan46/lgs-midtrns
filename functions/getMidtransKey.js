exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      clientKey: process.env.MIDTRANS_CLIENT_KEY
    })
  };
};