/**
 * Handles a POST request by receiving data from the request body and sending it back as a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export default function (req, res) {
  let data = '';

  req.on('data', function (chunk) {
    data += chunk;
  });

  req.on('end', function () {
    console.log('POST data received');
    res.writeHead(200, {
      'Content-Type': 'text/json'
    });
    res.write(JSON.stringify(data));
    res.end();
  });
};
