// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const fs = require('fs')

export default function handler(req, res) {
  res.writeHead(200, {
    'Content-Type': 'image/png'
  }).write(fs.readFile('image.png'))
}
