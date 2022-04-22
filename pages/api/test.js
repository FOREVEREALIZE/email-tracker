// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { exec } = require("child_process");
const fs = require('fs')
const axios = require('axios');

export default async function handler(req, res) {
  const image = await axios.get(process.env.URL + '/image.png')
  res.writeHead(200, {
    'Content-Type': 'image/png'
  }).write(image);
}
