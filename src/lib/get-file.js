const https = require('https')

function httpRequest (params, postData) {
  return new Promise(function (resolve, reject) {
    const req = https.get(params.url, (res) => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error('statusCode=' + res.statusCode))
      }

      const data = []

      res.on('data', (chunk) => {
        data.push(chunk)
      })

      res.on('end', () => {
        const buffer = Buffer.concat(data)
        return resolve(buffer.toString('base64'))
      })
    })

    req.on('error', (err) => {
      return reject(err)
    })

    req.end()
  })
}

module.exports = httpRequest
