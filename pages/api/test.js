// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { exec } = require("child_process");
const fs = require('fs')

export default function handler(req, res) {
  exec('pwd', (error, stdout, stderr) => {
    res.write(stdout)
  })
  fs.readFile('public/image.png', (error, data) => {
    if (error) {
      console.error(error);
      return 1;
    }
    res.writeHead(200, {
      'Content-Type': 'image/png'
    }).write(data);
  });
}
