const express = require('express')
const expressStaticGzip = require("express-static-gzip")
const path = require('path')
const app = express()

const staticPath = path.join(__dirname, '../dist')

app.use('/', expressStaticGzip(staticPath,{
    enableBrotli: true,
    customCompressions: [{
        encodingName: 'deflate',
        fileExtension: 'zz'
    }],
    orderPreference: ['br']
}))

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`Server is on port ${PORT}`)
});