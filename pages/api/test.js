// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { exec } = require("child_process");
const fs = require('fs')
const axios = require('axios');

export default async function handler(req, res) {
  axios.get(process.env.URL + '/image.png', {
      responseType: 'arraybuffer'
    }).then(response => {
      res.status(200).send(Buffer.from(response.data, 'binary'))});
  
}
