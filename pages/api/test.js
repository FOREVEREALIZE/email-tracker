// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const fs = require('fs')

export default function handler(req, res) {
  fs.readFile('image.png', (error, data) => {
    if (error) {
      console.error(error)
    }
    res.writeHead(200, {
      'Content-Type': 'image/png'
    }).write(data);
  });
}
