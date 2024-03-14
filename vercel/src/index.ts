import express from "express";
import cors from "cors";
import simpleGit from "simple-git"
import {generate} from "./utils"

const app = express();

app.use(cors())
app.use(express.json()) //for post req body access , we need this

app.post('/deploy', async (req, res) => {
    const giturl = req.body.giturl
    const id = generate()
    await simpleGit().clone(giturl, `output/${id}`)
    res.json({
        id: id
    })
})
app.listen(3000, () => {console.log("listening on port 3000")});