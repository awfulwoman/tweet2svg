import https from 'https'

function httpRequest(params, postData) {
  return new Promise(function (resolve, reject) {
    const req = https.get(params.url, (res) => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error('statusCode=' + res.statusCode));
      }

      const data = []

      res.on('data', (chunk) => {
        data.push(chunk)
      })

      res.on('end', () => {
        // at this point data is an array of Buffers
        // so Buffer.concat() can make us a new Buffer
        // of all of them together
        var buffer = Buffer.concat(data)
        return resolve(buffer.toString('base64'))
      })
    }) // end http

    req.on('error', (err) => {
      return reject(err)
    })

    req.end()
  }) // end promise
}

export default httpRequest
